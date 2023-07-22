import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

import request from "@/utils/request";
import { NOT_FOUND } from '@/constants/httpStatuses';
import InvalidCredentials from '@/errors/InvalidCredentials';
import serverErrorHandler from '@/utils/serverErrorHandler';

const BASE_URL = `${process.env.BASE_URL}/Account/SignIn`;
const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req, res) {
    try {
        const { username, password } = await req.json();

        const loginReq = await request.post(BASE_URL, { username, password });

        if (loginReq.code === NOT_FOUND) {
            throw new InvalidCredentials(loginReq.body?.message);
        }

        const token = jwt.sign(loginReq.body, JWT_SECRET)
        cookies().set('token', token, { secure: true });

        return NextResponse.json({ message: "Hello" });
    } catch (err) {
        return await serverErrorHandler(err);
    }
}
