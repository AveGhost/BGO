import api from "@/app/api/api";

export default async function getNews() {
    try {
        const response = await api.get('/news', {});
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}