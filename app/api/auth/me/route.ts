import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getSession();
    if (session.isLoggedIn) {
      return NextResponse.json({ isLoggedIn: true, adminEmail: session.adminEmail });
    }
    return NextResponse.json({ isLoggedIn: false });
  } catch (error) {
    console.error('Auth me error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
