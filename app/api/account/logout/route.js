import { NextResponse } from 'next/server';

import { JWT_COOKIE_NAME } from '@/constants/misc';
import serverErrorHandler from '@/utils/serverErrorHandler';
import { destroyCookie } from '@/utils/cookies';

export async function POST() {
    try {
        destroyCookie(JWT_COOKIE_NAME);

        return NextResponse.json({ message: "Successfully logged out." });
    } catch (err) {
        return await serverErrorHandler(err);
    }
}
