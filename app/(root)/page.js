import { redirect } from 'next/navigation';

import TerritoryTree from '@/features/territories/components/TerritoryTree';
import { JWT_COOKIE_NAME } from '@/constants/misc';
import { getCookie } from '@/utils/cookies';
import { verifyToken } from '@/utils/jwt';

const LOGIN_URL = '/account/login';

export default async function Home() {
    const token = getCookie(JWT_COOKIE_NAME);

    if (!token || !verifyToken(token.value)) {
        redirect(LOGIN_URL);
    }

    return (
        <>
            <TerritoryTree />
        </>
    )
}
