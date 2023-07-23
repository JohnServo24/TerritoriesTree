"use client"
import { useState } from "react";

const Input = ({ name, type, id, required }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            autoComplete="on"
            aria-required={required}
            required
        />
    )
}

export default Input

