const LoginForm = () => {
    const onSubmit = (e) => {
        console.log(onSubmit);
    }

    return (
        <form onSubmit={onSubmit}>
            Username: <input />
            Password: <input />

            <button type="submit">Submit</button>
        </form>
    )
}

export default LoginForm;
