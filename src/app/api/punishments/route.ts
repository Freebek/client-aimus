// app/api/punishments/route.ts
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type') || 'bans';

  const url = `https://panel.aimus.uz/api/${type}?page=1&rows=10&query=`;

  try {
    const response = await fetch(url, {
      headers: {
        // add any headers if needed
      },
      cache: 'no-store', // disable caching
    });

    if (!response.ok) {
      return new Response('Failed to fetch data', { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Error' }), { status: 500 });
  }
}
