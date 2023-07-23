import styles from "@/components/Form/Form.module.scss";
import Button from "@/components/Button";
import Spinner from "../Spinner";

const Form = ({
    children,
    onSubmit = () => { },
    className,
    isLoading
}) => {
    return (
        <form className={className ?? styles.form} onSubmit={onSubmit}>
            {children}

            <Button
                className={styles.form__button}
                type="submit"
            >
                {isLoading && <Spinner />}
                Submit
            </Button>
        </form>
    )
}

export default Form;
