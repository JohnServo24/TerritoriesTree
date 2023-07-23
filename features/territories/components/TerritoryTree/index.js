import styles from './TerritoryTree.module.scss'
import TerritoryTreeEntry from '@/features/territories/components/TerritoryTreeEntry';

import getTerritories from '@/utils/getTerritories';
import createHierarchy from '@/utils/createHierarchy';

const TerritoryTree = async () => {
    const territoriesRaw = await getTerritories();
    const territories = createHierarchy(territoriesRaw);

    return (
        <ul className={styles.list}>
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
