import { NextRequest, NextResponse } from 'next/server';
import { addUrl } from '../../../lib/db';

export async function POST(req: NextRequest) {
  const { originalUrl } = await req.json();
  if (!originalUrl) {
    return NextResponse.json({ error: 'Original URL is required' }, { status: 400 });
  }
  const url = addUrl(originalUrl);
  return NextResponse.json(url, { status: 201 });
}
