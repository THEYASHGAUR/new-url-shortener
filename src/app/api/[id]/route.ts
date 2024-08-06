import { NextRequest, NextResponse } from 'next/server';
import { getUrlById } from '../../../lib/db';

export async function GET(req: NextRequest) {
  // Extract the `id` from the URL path
  const id = req.nextUrl.pathname.split('/').pop();

  // Ensure id is a string before proceeding
  if (typeof id === 'string') {
    const url = getUrlById(id);
    if (url) {
      return NextResponse.redirect(url.originalUrl);
    }
  }
  
  return NextResponse.json({ error: 'URL not found' }, { status: 404 });
}
