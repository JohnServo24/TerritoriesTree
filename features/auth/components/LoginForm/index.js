"use client"

import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import useLogin from "@/features/auth/hooks/useLogin";

const USERNAME_LABEL = 'username';
const PASSWORD_LABEL = 'password';

const LoginForm = () => {
    const { onFormSubmit, message } = useLogin();

    return (
        <>
            {message && <p>{message}</p>}
            <Form onSubmit={onFormSubmit}>
                <Label htmlFor={USERNAME_LABEL} >
                    Username
                </Label>
                <Input
                    id={USERNAME_LABEL}
                    type="text"
                    name="username"
                    required
                />
                <Label htmlFor={PASSWORD_LABEL}>
                    Password
                </Label>
                <Input
                    id={PASSWORD_LABEL}
                    type="password"
                    name="password"
                    required
                />
            </Form>
        </>
    )
}

export default LoginForm;
