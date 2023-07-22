import { redirect } from 'next/navigation';

import styles from '@/styles/Home.module.scss'
import TerritoryTree from '@/components/TerritoryTree';
import { JWT_COOKIE_NAME } from '@/constants/misc';
import getTerritories from '@/utils/getTerritories';
import createHierarchy from '@/utils/createHierarchy';
import { getCookie } from '@/utils/cookies';
import { isTokenExpired } from '@/utils/jwt';

const LOGIN_URL = '/account/login';

//TODO: ADD <main> ON ALL PAGES

export default async function Home() {
    const territoriesRaw = await getTerritories();
    const territories = createHierarchy(territoriesRaw);

    const token = getCookie(JWT_COOKIE_NAME);

    if (!token || isTokenExpired(token.value)) {
        redirect(LOGIN_URL);
    }

    return (
        <ul className={styles.territory__list}>
            {territories.map((t) => (
                <TerritoryTree
                    key={t.id}
                    name={t.name}
                    descendants={t.children}
                />
            ))}
        </ul>
    )
}
