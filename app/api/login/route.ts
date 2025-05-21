import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { mobile, password } = await req.json();

  // Calling login api
  const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobile, password }),
    credentials: 'include', // Include cookies in the request
  });

  // Check if the request was successful
  if (!apiResponse.ok) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: apiResponse.status }
    );
  }

  // Parse the API response
  const responseData = await apiResponse.json();
  
  // Extract token
  const cookies = apiResponse.headers.get('set-cookie');
  let token = '';
  
  if (cookies) {
    const tokenCookie = cookies.split(';').find(cookie => 
      cookie.trim().startsWith('customer_access_token=')
    );
    
    if (tokenCookie) {
      token = tokenCookie.split('=')[1].trim();
    }
  }

  if (!token) {
    return NextResponse.json(
      { error: 'Failed to retrieve authentication token' },
      { status: 500 }
    );
  }

  const response = NextResponse.json({ 
    success: true,
    userData: {
      fullName: responseData.data.full_name,
      firstName: responseData.data.first_name,
      lastName: responseData.data.last_name,
      email: responseData.data.email,
      mobile: responseData.data.mobile
    }
  });

  // Setting the token to the response
  response.cookies.set('customer_access_token', token, { httpOnly: true });
  
  // Store user data in cookies
  response.cookies.set('user_fullname', responseData.data.full_name, { 
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
  response.cookies.set('user_firstname', responseData.data.first_name, {
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });

  return response;
}
