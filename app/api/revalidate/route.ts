import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const { path, tag } = await request.json();
    
    if (path) {
      revalidatePath(path);
    }
    
    if (tag) {
      revalidateTag(tag);
    }
    
    // Revalidate the main paths
    revalidatePath('/');
    revalidatePath('/home');
    revalidatePath('/admin/mosques');
    
    // Revalidate lecture-related tags
    revalidateTag('lectures');
    
    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    console.error('Error revalidating:', error);
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}
