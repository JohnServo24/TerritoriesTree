const TerritoryTree = ({ descendants }) => {
    return (
        <ul>
            {descendants.map((t) => (
                <li key={t.id}>
                    {t.name}
                    {t.children && (
                        <ul>
                            <TerritoryTree descendants={t.children} />
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

const Home = ({ territories }) => {
    console.log(territories)

    return (
        <ul>
            {territories.map((t) => (
                <li key={t.id}>
                    {t.name}
                    {t.children &&
                        <TerritoryTree descendants={t.children} />
                    }
                </li>
            ))}
        </ul>
    )
}

export default Home;

export const getServerSideProps = async () => {
    const BASE_URL = process.env.BASE_URL;

    const res = await fetch(`${BASE_URL}/Territories/All`);
    const { data } = await res.json();

    const territories = data.map((t) => ({
        id: Number(t.id),
        parent: t.parent ? Number(t.parent) : null,
        name: t.name
    }));

    const territoriesReferences = territories
        .reduce((acc, curr) => ({
            ...acc,
            [curr.id]: curr
        }), {});

    let root = [];
    for (let t of territories) {
        if (!t.parent) {
            root.push(t)
            continue;
        }

        const parent = t.parent;
        if (!territoriesReferences[parent].children) {
            territoriesReferences[parent].children = [];
        }

        territoriesReferences[parent].children.push(t);
    }

    return {
        props: {
            territories: root,
        }
    }
}

// GET ALL ROOT NODES
// From the root nodes, render the children
// If the children has children, render those children
// Repeat Repeat Repeat until we get to the bottom
