'use client'

import Logo from "./logo.component"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "@/context/AuthProvider"
import NavButtons from "./nav-buttons.component"
import NavList from "./nav-list.component"
import MobileMenu from "./mobile-menu.component"
import UserInfo from "./user-info.component"

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
    const user = useContext(AuthContext)?.user

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
                <NavList links={links} classes="md:flex hidden" />
                {!user ?
                <NavButtons classes="md:flex hidden" />
                :
                <UserInfo user={user} />}
                <Icon icon="material-symbols:menu-rounded" width="40" height="40" className="md:hidden cursor-pointer" onClick={toggleMobileMenu} />
                <MobileMenu isMobileMenuOpen={isMobileMenuOpen} links={links} toggleMobileMenu={toggleMobileMenu} />
            </div>
        </nav>
    )
}

export default Navigation