'use client'

import ArticleCard from "@/components/ui/article/listing-article-card.component"
import getNewsAll from "@/utils/news/GetNewsAll"
import LayoutChanger from "@/components/ui/article/layout-changer.component"
import { newsTypes } from "@/types/NewsTypes"
import { useContext, useEffect, useState, useRef } from "react"
import { HomeLayoutContext } from "@/context/HomeLayoutProvider"
import Loading from "./loading"

interface responseTypes {
  content: newsTypes[]
}

const ListingWrapper = ({ posts, page }: { posts: responseTypes, page: number }) => {
  const { isGrid } = useContext(HomeLayoutContext)!
  const [initialPosts, setInitialPosts] = useState<responseTypes>(posts)
  const [initialPage, setInitialPage] = useState<number>(page)
  const [loading, setLoading] = useState<boolean>(false)
  const [isMorePosts, setIsMorePosts] = useState<boolean>(true)
  const loadingRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && !loading && isMorePosts) {
        setLoading(true)
        const response: responseTypes = await getNewsAll({ page: initialPage + 1 })
        if(response.content.length === 0) setIsMorePosts(false)
        setInitialPosts(prev => ({
          content: [...prev.content, ...response.content]
        }))
        setInitialPage(prev => prev + 1)
        setLoading(false)
      }
    })

    const currentRef = loadingRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
      observer.disconnect()
    }
  }, [loading, initialPage])
  

  return (
    <>
      <div className={`grid ${isGrid ? "xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1" : "grid-cols-1"} gap-8 py-8 px-4 container mx-auto`}>
        <LayoutChanger />
        {initialPosts && initialPosts.content.map((item) => (
          <ArticleCard
            key={item.id}
            href={`/article/${item.id}`}
            rate={item.score}
            isGrid={isGrid}
            image={item.thumbnail}
            title={item.title}
            description={item.teaser}
            author={{ name: item.author.firstName, date: item.publishDate }}
          />
        ))}
      </div>
      <div className="h-[50px] w-full opacity-0" ref={loadingRef}>Ładowanie...</div>
      {loading && <Loading />}
    </>
  )
}

export default ListingWrapper
