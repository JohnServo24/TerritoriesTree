import styles from "@/components/Label/Label.module.scss";

const Label = ({ children, htmlFor, className }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={className ?? styles.label}
        >
            {children}
        </label>
    )
}

export default Label
