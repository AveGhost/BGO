import ListingWrapper from "@/app/components/review/listing-wrapper";
import HomeLayoutProvider from "@/app/context/HomeLayoutProvider";
import getNewsAll from "@/app/utils/news/GetNewsAll";
import { newsTypes } from "@/app/mixins/NewsTypes";
import { pageTypes } from "@/app/mixins/PageTypes";
import Pagination from "@/app/components/other/pagination/pagination.component";

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
