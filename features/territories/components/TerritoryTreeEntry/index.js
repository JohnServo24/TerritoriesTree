"use client"
import { useState } from "react";
import styles from "./TerritoryTreeEntry.module.scss"

const TerritoryTreeEntry = ({ name, descendants }) => {
    const [isCollapsed, setCollapsed] = useState(true);

    return (
        <li>
            {!descendants && <>{name}</>}
            {descendants &&
                <>
                    <button 
                        className={styles["territory__item--button"]}
                        onClick={() => setCollapsed((s) => !s)}
                    >
                        <span>{isCollapsed ? "+ " : "- "}</span>
                        {name}
                    </button>
                    {!isCollapsed &&
                        <ul className={styles.territory__list}>
                            {descendants.map((d) =>
                                <TerritoryTreeEntry
                                    key={d.id}
                                    name={d.name}
                                    descendants={d.children}
                                />
                            )}
                        </ul>
                    }
                </>
            }
        </li>
    )
}

export default TerritoryTreeEntry;

// GET ALL ROOT NODES
// From the root nodes, render the children
// If the children has children, render those children
// Repeat Repeat Repeat until we get to the bottom

