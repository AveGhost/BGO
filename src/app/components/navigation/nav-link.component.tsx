const NavLink = ({url,name}: {url: string, name: string}) => {
    return (
        <li>
            <a href={url} className="hover:text-zinc-400 transition-colors duration-300">{name}</a>
        </li>
    )
}

export default NavLink