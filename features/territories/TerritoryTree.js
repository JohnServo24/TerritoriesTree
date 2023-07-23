import styles from '@/styles/TerritoryTree.module.scss'
import TerritoryTreeEntry from '@/features/territories/TerritoryTreeEntry';

import getTerritories from '@/utils/getTerritories';
import createHierarchy from '@/utils/createHierarchy';

const TerritoryTree = async () => {
    const territoriesRaw = await getTerritories();
    const territories = createHierarchy(territoriesRaw);

    return (
        <ul className={styles.territory__list}>
            {territories.map((t) => (
                <TerritoryTreeEntry
                    key={t.id}
                    name={t.name}
                    descendants={t.children}
                />
            ))}
        </ul>
    )
}

export default TerritoryTree;
