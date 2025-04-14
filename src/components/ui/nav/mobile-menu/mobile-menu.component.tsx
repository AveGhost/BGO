import { Icon } from "@iconify/react/dist/iconify.js"
import NavList from "../nav-list.component"
import NavButtons from "../nav-buttons.component"

interface MobileMenuProps {
    isMobileMenuOpen: boolean
    links: {url: string, name: string}[]
    toggleMobileMenu: () => void
}

const MobileMenu = ({isMobileMenuOpen, links, toggleMobileMenu}: MobileMenuProps) => {
    return (
        <div className={`mobile-menu fixed ${isMobileMenuOpen ? "right-0 opacity-100" : "-right-100 opacity-0"} top-0 w-full max-w-[300px] h-full bg-zinc-800 z-50 p-4 shadow-lg shadow-zinc-600 transition-opacity duration-300`}>
            <Icon icon="material-symbols:close-rounded" width="40" height="40" className="cursor-pointer" onClick={toggleMobileMenu} />
            <NavList links={links} classes="flex flex-col md:hidden" />
            <NavButtons classes="flex" />
        </div>
    )
}

export default MobileMenu