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

export default getTerritories;
