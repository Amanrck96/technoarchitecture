import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { getSignature } from '@/lib/cloudinary';

export async function GET(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') || 'general';
    
    const signatureData = await getSignature(folder);
    return NextResponse.json(signatureData);
  } catch (error: any) {
    console.error('Cloudinary sign error:', error);
    if (error.message === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
