import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await requireAdmin();
    const items = await prisma.contentBlock.findMany();
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
    const item = await prisma.contentBlock.create({ data });
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
    const { id, key, ...rest } = data;
    
    let item;
    if (key) {
      item = await prisma.contentBlock.upsert({
        where: { key },
        update: rest,
        create: { key, ...rest },
      });
    } else if (id) {
      item = await prisma.contentBlock.update({
        where: { id },
        data: rest,
      });
    } else {
      return NextResponse.json({ error: 'Missing id or key' }, { status: 400 });
    }
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
    
    await prisma.contentBlock.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.message === 'Unauthorized') return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
