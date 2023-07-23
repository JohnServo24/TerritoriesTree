const createHierarchy = (list) => {
    const listCopy = [...list]

    // Unflattens the list/Adds hierarchy by
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

export default createHierarchy;
