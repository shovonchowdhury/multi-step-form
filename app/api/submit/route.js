import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const data = await request.json();

    // Simulate 20% failure rate
    if (Math.random() < 0.2) {
      return NextResponse.json({
        success: false,
        error: "Simulated server error"
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      data: data
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}