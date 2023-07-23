import styles from "./Index.module.scss";
import Image from "next/image";
import LogOutButton from '@/features/auth/components/LogOutButton';

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__right}>
                    <Image
                        alt="TerritoriesTree logo"
                        src="/logo.svg"
                        width={50}
                        height={50}
                    />
                    <h1 className={styles.header__heading}>
                        TerritoriesTree
                    </h1>
                </div>
                <LogOutButton />
            </header>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
