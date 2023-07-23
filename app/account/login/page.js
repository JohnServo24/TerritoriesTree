import { JWT_COOKIE_NAME } from '@/constants/misc';
import { HOME_URL } from '@/constants/urls';
import LoginForm from '@/features/auth/LoginForm';
import { getCookie } from '@/utils/cookies';
import { verifyToken } from '@/utils/jwt';
import { redirect } from 'next/navigation';

export default async function Login() {
    const token = getCookie(JWT_COOKIE_NAME);

    if (token && verifyToken(token.value)) {
        redirect(HOME_URL);
    }

    return (
        <LoginForm />
    )
}
