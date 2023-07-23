import styles from "./LoginPage.module.scss";

import { redirect } from 'next/navigation';
import Image from "next/image";

import { JWT_COOKIE_NAME } from '@/constants/misc';
import { HOME_URL } from '@/constants/urls';
import LoginForm from '@/features/auth/components/LoginForm';
import { getCookie } from '@/utils/cookies';
import { verifyToken } from '@/utils/jwt';

export default async function Login() {
    const token = getCookie(JWT_COOKIE_NAME);

    if (token && verifyToken(token.value)) {
        redirect(HOME_URL);
    }

    return (
        <div className={styles.form} >
            <header className={styles.form__header}>
                <Image
                    alt="TerritoriesTree logo"
                    src="/logo.svg"
                    width={200}
                    height={200}
                />
                <h1 className={styles.form__heading}>
                    TerritoriesTree
                </h1>
            </header>
            <LoginForm />
        </div>
    )
}
