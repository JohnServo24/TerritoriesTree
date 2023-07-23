"use client"

import Button from "@/components/Button"
import useLogout from "@/features/auth/hooks/useLogout";

const LogOutButton = () => {
    const handleLogout = useLogout();

    return (
        <Button onClick={handleLogout}>Log Out</Button>
    )
}

export default LogOutButton
