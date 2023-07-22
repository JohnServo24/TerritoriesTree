import { useState } from "react";

const Input = ({ name, type }) => {
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
        />
    )
}

export default Input
