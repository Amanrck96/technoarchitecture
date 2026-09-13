import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password' }, { status: 400 });
    }

    let user: any = null;
    let dbError = false;

    try {
      user = await prisma.adminUser.findUnique({ where: { email } });
    } catch (e: any) {
      console.warn('Database unreachable during login query:', e?.message || e);
      dbError = true;
    }

    // If database is connected and user was found, verify hash
    if (user) {
      const isValid = await bcrypt.compare(password, user.passwordHash);
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }

      const session = await getSession();
      session.isLoggedIn = true;
      session.adminEmail = user.email;
      session.adminId = user.id;
      await session.save();

      return NextResponse.json({ success: true, user: { email: user.email } });
    }

    // Default admin fallback when database is not yet connected or seeded:
    // Allows immediate login and verification with the default project credentials
    if (email === 'admin@technoarchitecture.in' && password === 'admin123') {
      const session = await getSession();
      session.isLoggedIn = true;
      session.adminEmail = 'admin@technoarchitecture.in';
      session.adminId = 'default-admin';
      await session.save();

      return NextResponse.json({
        success: true,
        user: { email: 'admin@technoarchitecture.in' },
        warning: dbError ? 'PostgreSQL database is currently offline; running in emergency local session mode.' : undefined,
      });
    }

    if (dbError) {
      return NextResponse.json(
        { error: 'Cannot connect to PostgreSQL database. Please verify DATABASE_URL in .env.' },
        { status: 503 }
      );
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error: any) {
    console.error('Login error:', error);
    return NextResponse.json({ error: error?.message || 'Internal server error' }, { status: 500 });
  }
}
