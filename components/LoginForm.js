import Input from "./Input";

const LoginForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
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
