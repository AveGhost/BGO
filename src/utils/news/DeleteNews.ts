import api from "@/api/api";

export default async function deleteNews({id}: {id: number}) {
    try {
        const response = await api.delete(`/news/${id}`, {});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}