import api from "../api/api";

interface LoginData {
    email: string;
    password: string;
}

export default async function handleLogin(data: LoginData): Promise<{ token?: string; error?: string }> {
    try {
        const response = await api.post("/auth/login", data);
        return { token: response.data.token };
    } catch (error: any) {
        console.error(error);
        
        if(error.response && error.response.data && error.response.data.message) {
            return { error: error.response.data.message };
        }
        
        return { error: 'Wystąpił błąd podczas logowania' }
    }
};
