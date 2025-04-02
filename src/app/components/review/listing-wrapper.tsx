'use client'

import { useEffect, useState } from "react"
import ReviewCard from "./review-card.component"
import { Icon } from "@iconify/react/dist/iconify.js"
import getNews from "@/app/utils/news/GetNews"
import { BeatLoader } from "react-spinners"

interface newsTypes {
    id: number
    title: string
    description: string
    image: string
    href: string
    publishDate?: string
    score: number
    summaryContent: string
    author: {
        firstName: string
        avatar?: string
    }
}

const ListingWrapper = () => {
    const [isGrid, setIsGrid] = useState(true)
    const [news,setNews] = useState<newsTypes[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const news = await getNews()
                setNews(news.content)
                setIsLoaded(true)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews()
    },[])

    const toggleGridLayout = () => {
        setIsGrid(true)
    }

    const toggleListLayout = () => {
        setIsGrid(false)
    }

    return (
        <div className={`grid ${isGrid ? "xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} gap-8 py-8 px-4 container mx-auto`}>
            <div className={`${isGrid ? "xl:col-span-4 md:col-span-2 sm:col-span-1" : "col-span-1"} flex gap-4 mb-6`}>
                <Icon icon="flowbite:grid-solid" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${isGrid ? "bg-zinc-600" : ""}`} onClick={toggleGridLayout} />
                <Icon icon="solar:list-linear" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${!isGrid ? "bg-zinc-600" : ""}`} onClick={toggleListLayout} />
            </div>
            {!isLoaded && <div className="flex justify-center items-center col-span-4"><BeatLoader color="#fff" size={30} /></div>}
            {news && news.map((item) => (
                <ReviewCard key={item.id} href={`/article/${item.id}`} rate={item.score} isGrid={isGrid} image="/placeholder-image.webp" title={item.title} description={item.summaryContent} author={{name: item.author.firstName, date: item.publishDate}}/>
            ))}
        </div>
    )
}

export default ListingWrapper