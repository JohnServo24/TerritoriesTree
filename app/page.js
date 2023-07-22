import styles from '@/styles/Home.module.scss'
import TerritoryTree from '@/components/TerritoryTree';

const BASE_URL = process.env.BASE_URL;

const getTerritories = async () => {
    const res = await fetch(`${BASE_URL}/Territories/All`);
    const { data } = await res.json();

    const territories = data.map((t) => ({
        id: Number(t.id),
        parent: t.parent ? Number(t.parent) : null,
        name: t.name
    }));

    return territories;
}

const createHierarchy = (list) => {
    const listCopy = [...list]

    // Unflattens the territories/Adds hierarchy by
    // using object references or pointer magic
    const listReferences = listCopy
        .reduce((acc, curr) => ({
            ...acc,
            [curr.id]: curr
        }), {});

    let root = [];
    for (let i of listCopy) {
        if (!i.parent) {
            root.push(i)
            continue;
        }

        const parent = i.parent;
        if (!listReferences[parent].children) {
            listReferences[parent].children = [];
        }

        listReferences[parent].children.push(i);
    }

    return root;
}

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
