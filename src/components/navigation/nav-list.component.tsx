import NavLink from "./nav-link.component"

const NavList = ({links, classes}: {links: {url: string, name: string}[], classes: string}) => {
    return (
        <ul className={`items-center gap-8 ${classes}`}>
            {links.map(link => <NavLink key={link.name} url={link.url} name={link.name} />)}
        </ul>
    )
}

export default NavList