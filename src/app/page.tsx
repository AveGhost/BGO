import ListingWrapper from "./components/review/listing-wrapper";
import HomeLayoutProvider from "./context/HomeLayoutProvider";
import getNewsAll from "./utils/news/GetNewsAll";
import { newsTypes } from "./mixins/NewsTypes";
import { pageTypes } from "./mixins/PageTypes";
import Pagination from "./components/other/pagination/pagination.component";

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
