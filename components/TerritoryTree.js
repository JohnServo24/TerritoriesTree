import { useState } from "react";

const TerritoryTree = ({ descendants }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <ul>
            {descendants.map((t) => (
                <li key={t.id}>
                    {t.name}
                    {t.children && (
                        <TerritoryTree descendants={t.children} />
                    )}
                </li>
            ))}
        </ul>
    )
}

export default TerritoryTree;

// GET ALL ROOT NODES
// From the root nodes, render the children
// If the children has children, render those children
// Repeat Repeat Repeat until we get to the bottom
