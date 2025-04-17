import HomeLayoutProvider from "@/context/HomeLayoutProvider"
import ListingWrapper from "@/components/article/listing/listing-wrapper"
import { newsTypes } from "@/types/NewsTypes"
import getSearchNews from "@/utils/news/SearchNews"

interface responseTypes {
    content: newsTypes[]
}
const MyPost = async () => {
    const news: responseTypes = await getSearchNews({author_id: 2})
    return (
        <HomeLayoutProvider>
            <h1 className="text-center text-3xl mt-6">Moje wpisy</h1>
            <ListingWrapper posts={news} page={1} />
        </HomeLayoutProvider>
    )
}

export default MyPost