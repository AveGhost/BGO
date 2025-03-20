'use client'

import NavLink from "./nav-link.component"
import Logo from "./logo.component"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"
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

    const [scroll, setScroll] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 130)
        })
    },[])

    return (
        <nav className={`bg-zinc-800 p-3 z-50 w-full ${scroll ? "sticky-nav" : ""}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Logo />
                <ul className="md:flex items-center gap-8 hidden">
                    {links.map(link => <NavLink key={link.name} url={link.url} name={link.name} />)}
                </ul>
                <div className="md:flex gap-4 items-center hidden">
                    <Link href={"/login"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300">Zaloguj</Link>
                    <Link href={"/register"} className="border-1 border-zinc-600 cursor-pointer py-2 px-4 rounded-lg hover:bg-zinc-600 hover:opacity-70 transition-all duration-300">Zarejestruj</Link>
                </div>
                <Icon icon="material-symbols:menu-rounded" width="40" height="40" className="md:hidden cursor-pointer" onClick={toggleMobileMenu} />
                <div className={`mobile-menu fixed ${isMobileMenuOpen ? "right-0 opacity-100" : "-right-100 opacity-0"} top-0 w-full max-w-[300px] h-full bg-zinc-800 z-50 p-4 shadow-lg shadow-zinc-600 transition-opacity duration-300`}>
                    <Icon icon="material-symbols:close-rounded" width="40" height="40" className="cursor-pointer" onClick={toggleMobileMenu} />
                    <ul className="md:hidden items-center gap-8 flex flex-col">
                        {links.map(link => <NavLink key={link.name} url={link.url} name={link.name} />)}
                    </ul>
                    <div className="md:hidden gap-4 mt-10 items-center flex justify-center">
                        <Link href={"/login"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300">Zaloguj</Link>
                        <Link href={"/register"} className="border-1 border-zinc-600 cursor-pointer py-2 px-4 rounded-lg hover:bg-zinc-600 hover:opacity-70 transition-all duration-300">Zarejestruj</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation