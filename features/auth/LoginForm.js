"use client"

import Button from "@/components/Button";
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

                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}

export default LoginForm;
