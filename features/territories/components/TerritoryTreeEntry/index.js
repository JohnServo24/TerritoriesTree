"use client"

import { useState } from "react";
import styles from "./TerritoryTreeEntry.module.scss"

const TerritoryTreeEntry = ({ name, descendants, leftSpacing }) => {
    const [isCollapsed, setCollapsed] = useState(true);

    return (
        <li style={{ marginLeft: leftSpacing }}>
            {!descendants && (
                <span className={styles.entry__title}>
                    <span className={styles.entry__symbol}>
                        &#9584;
                    </span>
                    {name}
                </span>
            )}
            {descendants &&
                <>
                    <button
                        className={styles.entry__button}
                        onClick={() => setCollapsed((s) => !s)}
                    >
                        <span className={styles.entry__symbol}>
                            {isCollapsed ? "+ " : "- "}
                        </span>
                        <span className={styles[
                            (isCollapsed
                                ? "entry__title--parent"
                                : "entry__title--expanded"
                            )
                        ]}>
                            {name}
                        </span>
                    </button>
                    {!isCollapsed &&
                        <ul className={styles.list}>
                            {descendants.map((d) =>
                                <TerritoryTreeEntry
                                    key={d.id}
                                    name={d.name}
                                    descendants={d.children}
                                    leftSpacing={leftSpacing + 5}
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

