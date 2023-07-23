"use client"

import styles from "@/styles/LoginForm.module.scss";
import Button from "@/components/Button";
import Input from "@/components/Input";
import useLogin from "@/features/auth/hooks/useLogin";

const USERNAME_LABEL = 'username';
const PASSWORD_LABEL = 'password';

const LoginForm = () => {
    const { onFormSubmit, message } = useLogin();

    return (
        <>
            {message && <p>{message}</p>}
            <form className={styles.form} onSubmit={onFormSubmit}>
                <label 
                    htmlFor={USERNAME_LABEL}
                    className={styles.form__label}
                >
                    Username
                </label>
                <Input 
                    id={USERNAME_LABEL}
                    type="text" 
                    name="username" 
                    required 
                />
                <label 
                    htmlFor={PASSWORD_LABEL}
                    className={styles.form__label}
                >
                    Password
                </label>
                <Input 
                    id={PASSWORD_LABEL}
                    type="password" 
                    name="password" 
                    required 
                />

                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}

export default LoginForm;
