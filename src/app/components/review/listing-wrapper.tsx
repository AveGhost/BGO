'use client'

import { useState } from "react"
import ReviewCard from "./review-card.component"
import { Icon } from "@iconify/react/dist/iconify.js"

const ListingWrapper = () => {
    const [isGrid, setIsGrid] = useState(true)

    const toggleGridLayout = () => {
        setIsGrid(true)
    }

    const toggleListLayout = () => {
        setIsGrid(false)
    }

    return (
        <div className={`grid ${isGrid ? "grid-cols-4" : "grid-cols-1"} gap-x-4 gap-y-8 py-8 container mx-auto`}>
            <div className={`${isGrid ? "col-span-4" : "col-span-1"} flex gap-4 mb-6`}>
                <Icon icon="flowbite:grid-solid" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${isGrid ? "bg-zinc-600" : ""}`} onClick={toggleGridLayout} />
                <Icon icon="solar:list-linear" width="35" height="35" className={`border-1 border-zinc-600 p-1 cursor-pointer hover:bg-zinc-600 transition-colors duration-300 rounded-lg ${!isGrid ? "bg-zinc-600" : ""}`} onClick={toggleListLayout} />
            </div>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author={{avatar: "/avatar.png", name: "AveGhost", date: "2 dni temu"}}/>
            <ReviewCard rate={5} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author={{avatar: "/avatar.png", name: "AveGhost", date: '19.03.2025'}}/>
            <ReviewCard rate={10} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author={{avatar: "/avatar.png", name: "AveGhost", date: '04.02.2025'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
            <ReviewCard rate={3} isGrid={isGrid} image="/placeholder-image.webp" title="Assasins Creed Shadows - Ubisoft popierdoliło" category="Gry" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" href="/" author={{name: "AveGhost", date: '07.11.2024'}}/>
        </div>
    )
}

export default ListingWrapper