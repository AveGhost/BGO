import api from "@/app/api/api";

export default async function getNewsAll() {
    try {
        const response = await api.get(`/news`, {});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}