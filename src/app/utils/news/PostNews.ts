import api from "@/app/api/api";
import { PostFormData } from "@/app/mixins/PostFormData";


export default async function postNews(data: PostFormData) {
    console.log(data)
    try {
        const response = await api.post("/news",data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}