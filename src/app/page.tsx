import ListingWrapper from "@/components/article/listing/listing-wrapper";
import HomeLayoutProvider from "../context/HomeLayoutProvider";
import getNewsAll from "@/utils/news/GetNewsAll";
import { newsTypes } from "@/types/NewsTypes";
import { pageTypes } from "@/types/PageTypes";

interface responseTypes {
    content: newsTypes[]
    page: pageTypes
}

export default async function Home() {
  const news: responseTypes = await getNewsAll({page: 1});
  return (
    <HomeLayoutProvider>
      <ListingWrapper posts={news} page={1} />
    </HomeLayoutProvider>
  )
}
