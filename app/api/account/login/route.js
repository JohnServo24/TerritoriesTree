import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    const { username, password } = await req.json();


    return NextResponse.json({ message: "Hello" });
}
