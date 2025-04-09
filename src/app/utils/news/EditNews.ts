import api from "@/app/api/api";
import { PostFormData } from "@/app/mixins/PostFormData";


export default async function editNews(data: PostFormData, id: number) {
    try {
        const response = await api.put(`/news/${id}`,data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}