'use client'

import { useEffect, useState } from "react"
import ReviewCard from "./review-card.component"
import { Icon } from "@iconify/react/dist/iconify.js"
import getNews from "@/app/utils/news/GetNews"
import { Cabin_Sketch } from "next/font/google"

const ListingWrapper = () => {
    const [isGrid, setIsGrid] = useState(true)
    const [news,setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const news = await getNews()
                console.log(news)
                setNews(news.content)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews()
        console.log(news)
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
            {news && news.map((item) => (
                <ReviewCard key={item.id} rate={item.score} isGrid={isGrid} image="/placeholder-image.webp" title={item.title} description={item.content[0].content} author={{name: item.author.firstName, date: item.publishDate}}/>
            ))}
        </div>
    )
}

export default ListingWrapper