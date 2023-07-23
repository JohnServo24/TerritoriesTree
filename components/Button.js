"use client"

const Button = ({
    children,
    className,
    type = "button",
    onClick = () => { },
}) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
