import api from "@/app/api/api";

export default async function getGames() {
    try {
        const response = await api.get('/games', {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}