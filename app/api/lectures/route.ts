import { NextResponse } from 'next/server';
import { LectureService } from '@/lib/lectureService';

export const revalidate = 0; // Disable caching completely for dynamic data

export async function GET() {
  try {
    const lectures = await LectureService.getAllLectures();
    
    return NextResponse.json(
      { lectures },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching lectures:', error);
    return NextResponse.json(
      { error: 'Failed to fetch lectures' },
      { status: 500 }
    );
  }
}
