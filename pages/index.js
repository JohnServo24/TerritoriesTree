import TerritoryTree from "@/components/TerritoryTree";

const Home = ({ territories }) => {
    console.log(territories)

    return (
        <ul>
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

    // Unflattens the territories/Adds hierarchy by
    // using object references or pointer magic
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
