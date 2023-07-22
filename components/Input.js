"use client"
import { useState } from "react";

const Input = ({ name, type, required }) => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <input
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

