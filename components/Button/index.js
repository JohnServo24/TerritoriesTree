"use client"

import styles from "@/components/Button/Button.module.scss";

const Button = ({
    children,
    className,
    type = "button",
    onClick = () => { },
}) => {
    return (
        <button
            className={className ?? styles.button}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
