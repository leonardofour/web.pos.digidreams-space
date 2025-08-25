import { NextResponse } from 'next/server';
import { BASE_URL } from '@/global/variable';

export async function GET() {
  try {
    
    if (!BASE_URL) {
      console.error('BASE_URL is undefined');
      return NextResponse.json(
        { 
          success: false, 
          error: 'BASE_URL is not configured' 
        },
        { status: 500 }
      );
    }

    const backendResponse = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      
      return NextResponse.json(
        { 
          success: false, 
          error: `Backend API error: ${backendResponse.status} ${backendResponse.statusText}`,
          details: errorText
        },
        { status: backendResponse.status }
      );
    }

    const users = await backendResponse.json();
    return NextResponse.json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users from backend:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch users from backend',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}