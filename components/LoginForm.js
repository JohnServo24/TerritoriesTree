"use client"
import Input from "@/components/Input";
import request from "@/utils/request";

const LoginForm = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        await request.post('/api/account/login', { username, password });
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
