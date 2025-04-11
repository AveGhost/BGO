import api from "@/app/api/api";
import { pages } from "next/dist/build/templates/app-page";

export default async function getNewsAll({page}: {page?: number} = {}) {
    try {
        const response = await api.get(`/news`, {
            params:{
                page: page
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}