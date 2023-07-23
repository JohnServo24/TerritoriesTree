import styles from "@/components/Form/Form.module.scss";
import Button from "@/components/Button";

const Form = ({
    children,
    onSubmit = () => { },
    className
}) => {
    return (
        <form className={className ?? styles.form} onSubmit={onSubmit}>
            {children}

            <Button
                className={styles.form__button}
                type="submit"
            >
                Submit
            </Button>
        </form>
    )
}

export default Form;
