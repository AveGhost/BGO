'use client'

import { createContext, useLayoutEffect, useEffect, useState, use } from "react";
import api from "../api/api";
import useLocalStorageState from "use-local-storage-state";

interface AuthContext {
    token: string | null
    setToken: (token: string | null) => void
    user: User | null
    setUser: (user: User | null) => void
}

interface User {
    id: number
    email: string
    bio: string
    createdAt: string
    firstName: string
    lastName: string
    userRole: string
}

export const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useLocalStorageState<string | null>('token', {defaultValue: null});
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchMe = async () => {
            if(!token) return;
            try {
                const response = await api.get("/auth/me");
                console.log(response)
                setUser(response.data);
            } catch (error) {
                console.error(error);
                setUser(null);
            }
        }

        fetchMe();
    },[token])

    useLayoutEffect(() => {
        const authInterceptor = api.interceptors.request.use((config) => {
            config.headers.Authorization = token ? `Bearer ${token}` : config.headers.Authorization;
            return config;
        })

        return () => {
            api.interceptors.request.eject(authInterceptor);
        }
    },[token])

    useLayoutEffect(() => {
        const refreshInterceptor = api.interceptors.response.use((response) => response, async (error) => {
            const originalRequest = error.config;
            if(error.response.status === 403 && error.response.data.message === 'Sesja wygasła') {
                try {
                    const response = await api.get("/auth/refresh");
                    setToken(response.data.token);
                    originalRequest.headers.Authorization = `Bearer ${response.data.token}`
                    originalRequest._retry = true;
                    return api(originalRequest);
                } catch (error) {
                    console.error(error);
                }
            }
            return Promise.reject(error);
        })
        return () => {
            api.interceptors.request.eject(refreshInterceptor);
        }
    },[])

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider