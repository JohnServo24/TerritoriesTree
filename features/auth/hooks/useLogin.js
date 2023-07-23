import { useRouter } from "next/navigation";
import { useState } from "react";

import { SUCCESS } from "@/constants/httpStatuses";
import { HOME_URL } from "@/constants/urls";
import request from "@/utils/request";

const LOGIN_URL = '/api/account/login';

const useLogin = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setLoading] = useState(false);

    const onFormSubmit = async (e) => {
        e.preventDefault();
        setLoading((s) => !s);

        const username = e.target.username.value;
        const password = e.target.password.value;

        const { code, body } = await request.post(LOGIN_URL, { username, password });

        if (code === SUCCESS) {
            router.push(HOME_URL);
            setStatus("success");
        } else {
            setStatus("error");
        }

        setMessage(body.message);

        setLoading((s) => !s);
    }

    return { onFormSubmit, status, isLoading, message };
}

export default useLogin;
