import styles from "./LoginPage.module.scss";

export default function Layout({ children }) {
    return (
        <>
            <main className={styles.layout}>{children}</main>
        </>
    )
}
