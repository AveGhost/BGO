import ListingWrapper from "@/components/article/listing/listing-wrapper";
import HomeLayoutProvider from "../context/HomeLayoutProvider";
import getNewsAll from "@/utils/news/GetNewsAll";
import { newsTypes } from "@/types/NewsTypes";
import { pageTypes } from "@/types/PageTypes";
import Pagination from "@/components/ui/pagination/pagination.component";

interface responseTypes {
    content: newsTypes[]
    page: pageTypes
}

export default async function Home() {
  const news: responseTypes = await getNewsAll();
  return (
    <HomeLayoutProvider>
      <ListingWrapper posts={news} />
      <Pagination pagesNumber={news.page.totalPages} />
    </HomeLayoutProvider>
  )
}
