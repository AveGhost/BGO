import api from "@/app/api/api";

interface GameData {
    title: string;
    coverImage: string;
    description: string;
    platform: string;
    categories: string[];
}
export default async function postGame(data: GameData): Promise<{ game?: GameData; error?: string }> {
    try {
        const response = await api.post("/games",{
            title: data.title,
            coverImage: data.coverImage,
            description: data.description,
            platform: data.platform.toUpperCase(),
            categories: data.categories.map((category) => category.toUpperCase()),
        });
        console.log(response.data);
        return { game: response.data };
    } catch (error: any) {
        console.error(error);
        
        if(error.response && error.response.data && error.response.data.message) {
            return { error: error.response.data.message };
        }
        
        return { error: 'Wystąpił błąd podczas dodawania gry' }
    }
}