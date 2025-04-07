'use client'

import ReviewCard from "./review-card.component"
import getNewsAll from "@/app/utils/news/GetNewsAll"
import LayoutChanger from "./layout-changer.component"
import { newsTypes } from "@/app/mixins/NewsTypes"
import { useContext, useEffect, useState } from "react"
import { HomeLayoutContext } from "@/app/context/HomeLayoutProvider"
import { BeatLoader } from "react-spinners"
interface responseTypes {
    content: newsTypes[]
}

const ListingWrapper = () => {
    const [news, setNews] = useState<responseTypes | null>(null)
    const { isGrid } = useContext(HomeLayoutContext)!

    useEffect(() => {
        const fetchNews = async () => {
            const news: responseTypes = await getNewsAll()
            setNews(news)
        }

        fetchNews()
    },[])

    return (
        <div className={`grid ${isGrid ? "xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} gap-8 py-8 px-4 container mx-auto`}>
            <LayoutChanger />
            {!news && <div className="flex justify-center items-center col-span-4"><BeatLoader color="#fff" size={30} /></div>}
            {news && news.content.map((item) => (
                <ReviewCard key={item.id} href={`/article/${item.id}`} rate={item.score} isGrid={isGrid} image="/placeholder-image.webp" title={item.title} description={item.summaryContent} author={{name: item.author.firstName, date: item.publishDate}}/>
            ))}
        </div>
    )
}

export default ListingWrapper