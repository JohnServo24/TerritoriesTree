import styles from '@/styles/Home.module.scss'
import TerritoryTree from '@/components/TerritoryTree';
import getTerritories from '@/utils/getTerritories';
import createHierarchy from '@/utils/createHierarchy';
import { getCookie } from '@/utils/cookies';
import { JWT_COOKIE_NAME } from '@/constants/misc';
import { redirect } from 'next/navigation';

const LOGIN_URL = '/account/login';

export default async function Home() {
    const territoriesRaw = await getTerritories();
    const territories = createHierarchy(territoriesRaw);

    const token = getCookie(JWT_COOKIE_NAME);

    if (!token) redirect(LOGIN_URL);

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
