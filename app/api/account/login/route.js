import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';
import request from "@/utils/request";

const BASE_URL = `${process.env.BASE_URL}/Account/SignIn`;

export async function POST(req, res) {
    const { username, password } = await req.json();

    const loginData = await request.post(BASE_URL, { username, password })
    console.log(loginData)

    return NextResponse.json({ message: "Hello" });
}
