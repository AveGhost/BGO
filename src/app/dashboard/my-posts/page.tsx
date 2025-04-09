import HomeLayoutProvider from "@/app/context/HomeLayoutProvider"
import ListingWrapper from "@/app/components/review/listing-wrapper"
import { newsTypes } from "@/app/mixins/NewsTypes"
import getNewsAll from "@/app/utils/news/GetNewsAll"

interface responseTypes {
    content: newsTypes[]
}
const MyPost = async () => {
    const news: responseTypes = await getNewsAll()
    return (
        <HomeLayoutProvider>
            <h1 className="text-center text-3xl mt-6">Moje wpisy</h1>
            <ListingWrapper posts={news} />
        </HomeLayoutProvider>
    )
}

export default MyPost