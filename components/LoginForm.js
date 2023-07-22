"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import Input from "@/components/Input";
import { SUCCESS } from "@/constants/httpStatuses";
import request from "@/utils/request";

const LOGIN_URL = '/api/account/login';

const LoginForm = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const { code, body } = await request.post(LOGIN_URL, { username, password });

        if (code === SUCCESS) {
            router.push('/');
        }

        setMessage(body.message);
    }

    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={onSubmit}>
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
