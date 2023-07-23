"use client"

import styles from "./LogOutButton.module.scss";
import Button from "@/components/Button"
import useLogout from "@/features/auth/hooks/useLogout";

const LogOutButton = () => {
    const handleLogout = useLogout();

    return (
        <Button 
            onClick={handleLogout}
            className={styles.button}
        >
            Log Out
        </Button>
    )
}

export default LogOutButton
