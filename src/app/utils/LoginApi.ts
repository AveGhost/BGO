import api from "../api/api";

interface LoginData {
    email: string;
    password: string;
}

export default async function handleLogin(data: LoginData): Promise<string | null> {
    try {
        const response = await api.post("/auth/login", data);
        return null;
    } catch (error: any) {
        console.error(error);
        
        if(error.response && error.response.data && error.response.data.message) {
            return error.response.data.message;
        }
        
        return 'Wystąpił błąd podczas logowania';
    }
};
