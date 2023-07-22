"use client"

import Input from "@/components/Input";
import { SUCCESS } from "@/constants/httpStatuses";
import request from "@/utils/request";
import { useRouter } from "next/navigation";

const LOGIN_URL = '/api/account/login';

const LoginForm = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const { code } = await request.post(LOGIN_URL, { username, password });

        if (code === SUCCESS) {
            router.push('/');
        }
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
