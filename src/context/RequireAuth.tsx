'use client'

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthProvider";
import { Roles } from "@/types/RoleTypes";

interface RequireAuthProps {
    children: React.ReactNode;
    role?: Roles.ADMINISTRATOR | Roles.EDITOR
}

const RequireAuth = ({ children, role }: RequireAuthProps) => {
    const {user, token, isFetching} = useContext(AuthContext)!
    const router = useRouter();
    useEffect(() => {
        if(isFetching) return
        console.log(user)
        console.log(token)
        if (!token || !user) {
            router.replace("/login");
        } else if (role && user.userRole !== role) {
            router.replace("/unauthorized");
        }
    }, [token, user, role, isFetching]);

    if(isFetching) return null
    if (!token || !user) return null;
    if (role && user.userRole !== role) return null;

    return <>{children}</>;
};

export default RequireAuth;
