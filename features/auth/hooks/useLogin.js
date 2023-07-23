import { useRouter } from "next/navigation";
import { useState } from "react";
import { SUCCESS } from "@/constants/httpStatuses";
import request from "@/utils/request";
import { HOME_URL } from "@/constants/urls";

const LOGIN_URL = '/api/account/login';

const useLogin = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        const { code, body } = await request.post(LOGIN_URL, { username, password });

        if (code === SUCCESS) {
            router.push(HOME_URL);
        }

        setMessage(body.message);
    }

    return { onFormSubmit, message };
}

export default useLogin;
