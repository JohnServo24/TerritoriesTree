import { NextResponse } from 'next/server';

import { NOT_FOUND } from '@/constants/httpStatuses';
import { JWT_COOKIE_NAME } from '@/constants/misc';
import InvalidCredentials from '@/errors/InvalidCredentials';
import request from "@/utils/request";
import serverErrorHandler from '@/utils/serverErrorHandler';
import { setToken } from '@/utils/jwt';
import { setCookie } from '@/utils/cookies';

const BASE_URL = `${process.env.BASE_URL}/Account/SignIn`;

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        const loginReq = await request.post(BASE_URL, { username, password });

        if (loginReq.code === NOT_FOUND) {
            throw new InvalidCredentials(loginReq.body?.message);
        }

        const token = setToken({ username, password });
        setCookie(JWT_COOKIE_NAME, token);

        return NextResponse.json({ message: "Successfully logged in." });
    } catch (err) {
        return await serverErrorHandler(err);
    }
}
