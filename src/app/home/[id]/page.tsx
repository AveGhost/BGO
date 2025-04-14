import ListingWrapper from "@/components/review/listing-wrapper";
import HomeLayoutProvider from "@/context/HomeLayoutProvider";
import getNewsAll from "@/utils/news/GetNewsAll";
import { newsTypes } from "@/types/NewsTypes";
import { pageTypes } from "@/types/PageTypes";
import Pagination from "@/components/other/pagination/pagination.component";

interface responseTypes {
    content: newsTypes[]
    page: pageTypes
}

export default async function Home({params}: {params: {id: number}}) {
  const id = await params.id
  const news: responseTypes = await getNewsAll({page: id});
  return (
    <HomeLayoutProvider>
      <ListingWrapper posts={news} />
      <Pagination pagesNumber={news.page.totalPages} currentPage={id} />
    </HomeLayoutProvider>
  )
}
