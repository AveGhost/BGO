'use client'

import deleteNews from "@/app/utils/news/DeleteNews"
import { redirect } from "next/navigation"
import { useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

interface WarrningPopupProps {
    text: string
    event?: (open: boolean) => void
    pageId?: number
}

const WarrningPopup = ({ text, event, pageId }: WarrningPopupProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const deleteArticle = async () => {
        if(!pageId) return
        setIsLoading(true)
        await deleteNews({ id: pageId })
        event?.(false)
        redirect("/")
    }

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center w-full bg-zinc-900/60 z-70">
            <div className="flex flex-col justify-center items-center w-[450px] h-[250px] bg-zinc-700 rounded-lg gap-6">
                <h3 className="text-center text-3xl font-medium">Uwaga</h3>
                <p>{text}</p>
                <div className="flex justify-between items-center gap-4 w-full max-w-[250px]">
                    <button className="flex gap-4 bg-green-600 items-center justify-center rounded-lg px-4 py-2 w-full text-sm hover:bg-green-800 transition-colors duration-300 cursor-pointer" onClick={deleteArticle}>{!isLoading ? "Tak" : <Icon icon="codex:loader" width="24" height="24" />}</button>
                    <button className="flex gap-4 bg-rose-600 rounded-lg px-4 py-2 w-full items-center justify-center text-sm hover:bg-rose-900 transition-colors duration-300 cursor-pointer" onClick={() => event?.(false)}>Nie</button>
                </div>
            </div>
        </div>
    )
}

export default WarrningPopup