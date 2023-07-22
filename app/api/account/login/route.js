import { NextResponse } from 'next/server';

export async function POST() {
    console.log("I AM HERE")
    return NextResponse.json({ message: "Hello" });
}
