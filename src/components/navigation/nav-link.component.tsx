import Link from "next/link"

const NavLink = ({url,name}: {url: string, name: string}) => {
    return (
        <li>
            <Link href={url} className="hover:text-zinc-400 transition-colors duration-300">{name}</Link>
        </li>
    )
}

export default NavLink