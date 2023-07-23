"use client"

import Input from "@/components/Input";
import useLogin from "./hooks/useLogin";

const LoginForm = () => {
    const { onFormSubmit, message } = useLogin();

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={onFormSubmit}>
                Username:
                <Input type="text" name="username" required />
                Password:
                <Input type="password" name="password" required />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LoginForm;
