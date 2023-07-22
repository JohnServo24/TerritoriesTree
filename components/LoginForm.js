import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmit}>
            Username:
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            Password:
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;
