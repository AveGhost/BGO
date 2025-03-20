'use client'

import NavLink from "./nav-link.component"
import Logo from "./logo.component"
import Link from "next/link"
import { useState, useEffect } from "react"

const Navigation = () => {
    const links = [
        {
            url: "/",
            name: "Gry"
        },
        {
            url: "/about",
            name: "Technologia"
        },
        {
            url: "/",
            name: "Seriale"
        },
        {
            url: "/",
            name: "Filmy"
        }
    ]

    const  [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 130)
        })
    },[])
    return (
        <nav className={`bg-zinc-800 p-3 z-50 w-full ${scroll ? "sticky-nav" : ""}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <ul className="flex items-center gap-8">
                    {links.map(link => <NavLink key={link.name} url={link.url} name={link.name} />)}
                </ul>
                <div className="flex gap-4 items-center">
                    <Link href={"/login"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300">Zaloguj</Link>
                    <Link href={"/register"} className="border-1 border-zinc-600 cursor-pointer py-2 px-4 rounded-lg hover:bg-zinc-600 hover:opacity-70 transition-all duration-300">Zarejestruj</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation