import api from "../api/api";

interface RegisterData {
    email: string;
    password: string;
    password2: string;
    first_name: string;
    last_name: string;
    username: string;
}

export default async function handleRegister(data: RegisterData): Promise<string | null> {
    if(!data.email || !data.password || !data.password2 || !data.first_name || !data.last_name || !data.username) {
        return "Wypełnij wszystkie pola";
    }

    if(data.password !== data.password2) {
        return "Hasła nie zgadzają się";
    }

    if(data.password.length < 8) {
        return "Hasło jest za krótkie";
    }

    if(!data.email.includes("@")) {
        return "Niepoprawny adres e-mail";
    }

    try {
        const response = await api.post("/auth/register", data);
        return null;
    } catch (error: any) {
        console.error(error);
        
        if(error.response && error.response.data && error.response.data.message) {
            return error.response.data.message;
        }

        return 'Wystąpił błąd podczas rejestacji';
    }
};
