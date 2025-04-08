'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const Steps = () => {
    const pathname = usePathname()
    const activePath = (path: string) => {
        if (pathname === path) {
            return 'opacity-100'
        } else {
            return 'opacity-40'
        }
    }
    return (
        <div className="flex items-center justify-center gap-12 w-full mb-8">
            <Link href={"/dashboard/add-game"} className={`flex flex-col w-35 h-35 justify-center items-center rounded-full p-2 border border-zinc-200 bg-zinc-600 aspect-square hover:opacity-100 hover:bg-zinc-700 duration-300 transition-all ${activePath('/dashboard/add-game')}`}>
                <span className="text-3xl">1</span>
                <p className="text-sm text-zinc-300">Dodaj grę</p>
            </Link>
            <span className="w-35 h-0.5 align-middle bg-zinc-400"></span>
            <Link href={"/dashboard/add-post"} className={`flex flex-col w-35 h-35 justify-center items-center rounded-full p-2 border border-zinc-200 bg-zinc-600 aspect-square hover:opacity-100 hover:bg-zinc-700 duration-300 transition-all ${activePath('/dashboard/add-post')}`}>
                <span className="text-3xl">2</span>
                <p className="text-sm text-zinc-300">Dodaj recenzję</p>
            </Link>
        </div>
    )
}

export default Steps