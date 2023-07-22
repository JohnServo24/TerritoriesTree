"use client"
import Input from "@/components/Input";

const LoginForm = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        await fetch('/api/account/login', {
            method: "POST"
        })
    }

    return (
        <form onSubmit={onSubmit}>
            Username:
            <Input type="text" name="username" />
            Password:
            <Input type="password" name="password" />

            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;
