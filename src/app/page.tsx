import ListingWrapper from "./components/review/listing-wrapper";
import HomeLayoutProvider from "./context/HomeLayoutProvider";

export default function Home() {
  return (
    <HomeLayoutProvider>
      <ListingWrapper />
    </HomeLayoutProvider>
  )
}
