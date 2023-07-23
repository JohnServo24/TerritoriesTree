"use client"
import { useState } from "react";
import styles from "@/styles/Input.module.scss";

const Input = ({ name, type, id, required, className }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input
            id={id}
            className={className ?? styles.input}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            aria-required={required}
            autoComplete="on"
            required
        />
    )
}

export default Input

