import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('customer_access_token', '', { maxAge: 0 });
  return response;
}
