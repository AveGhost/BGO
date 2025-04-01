import api from "@/app/api/api";


export default async function postGame() {
    try {
        const response = await api.post("/games",{
            title: "Assassins Creed Shadows",
            coverImage: "https://store-images.s-microsoft.com/image/apps.18685.14601317961808017.7b103743-3dbd-479d-b77a-f82e7f0548c6.117374c6-d4eb-4046-a93b-2e60c73df398?q=90&w=480&h=270",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
            platform: "PC",
            categories: [
                "ACTION",
                "RPG"
            ]
        });
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}