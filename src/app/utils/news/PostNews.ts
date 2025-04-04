import api from "@/app/api/api";
import { PostFormData } from "@/app/mixins/PostFormData";


export default async function postNews(data: PostFormData) {
    try {
        const response = await api.post("/news",data);
        console.log(response);
        // return response.data;
    } catch (error) {
        console.error(error);
    }
}