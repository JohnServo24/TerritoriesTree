import styles from '@/styles/Home.module.scss'
import TerritoryTree from '@/components/TerritoryTree';
import getTerritories from '@/utils/getTerritories';
import createHierarchy from '@/utils/createHierarchy';

export default async function Home() {
    const territoriesRaw = await getTerritories();
    const territories = createHierarchy(territoriesRaw);

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
