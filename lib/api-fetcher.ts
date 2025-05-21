export async function apiFetcher(url: string, options: RequestInit = {}) {
    const res = await fetch(url, {
      ...options,
      credentials: 'include', // add cookie
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
  
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error?.message || 'Request failed');
    }
  
    return res.json();
  }
  