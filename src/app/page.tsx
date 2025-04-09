import ListingWrapper from "./components/review/listing-wrapper";
import HomeLayoutProvider from "./context/HomeLayoutProvider";
import getNewsAll from "./utils/news/GetNewsAll";
import { newsTypes } from "./mixins/NewsTypes";

interface responseTypes {
    content: newsTypes[]
}

export default async function Home() {
  const news: responseTypes = await getNewsAll();
  return (
    <HomeLayoutProvider>
      <ListingWrapper posts={news} />
    </HomeLayoutProvider>
  )
}
