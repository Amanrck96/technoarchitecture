import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';
import { createSlug } from '@/lib/utils';

export async function GET() {
  try {
    await requireAdmin();
    const items = await prisma.project.findMany({
      orderBy: [
        { order: 'asc' },
        { year: 'desc' },
      ],
    });
    return NextResponse.json(items);
  } catch (error: any) {
    if (error.message === 'Unauthorized') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const data = await request.json();
    const slug = data.slug || createSlug(data.title);
    const item = await prisma.project.create({
      data: {
        ...data,
        slug,
      },
    });
    return NextResponse.json(item);
  } catch (error: any) {
    if (error.message === 'Unauthorized') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const data = await request.json();
    const { id, ...rest } = data;
    const item = await prisma.project.update({
      where: { id },
      data: rest,
    });
    return NextResponse.json(item);
  } catch (error: any) {
    if (error.message === 'Unauthorized') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await requireAdmin();
    let id;
    const { searchParams } = new URL(request.url);
    if (searchParams.has('id')) {
      id = searchParams.get('id');
    } else {
      const data = await request.json();
      id = data.id;
    }
    
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.message === 'Unauthorized') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
