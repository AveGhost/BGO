import Link from "next/link"

const NavButtons = ({classes}: {classes?: string}) => {
    return (
        <div className={`gap-4 items-center justify-center md:justify-start mt-10 md:mt-0 ${classes}`}>
            <Link href={"/login"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300">Zaloguj</Link>
            <Link href={"/register"} className="border-1 border-zinc-600 cursor-pointer py-2 px-4 rounded-lg hover:bg-zinc-600 hover:opacity-70 transition-all duration-300">Zarejestruj</Link>
        </div>
    )
}

export default NavButtons