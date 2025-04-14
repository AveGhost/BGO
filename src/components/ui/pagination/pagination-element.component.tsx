import Link from "next/link"

const PaginationElement = ({page,isActive}: {page?: number,isActive?: boolean}) => {
    return (
        <li>
            <Link href={`/home/${page}`} className={`text-zinc-400 border-1 border-zinc-600 rounded-lg w-8 h-8 flex justify-center items-center hover:bg-zinc-600 hover:text-zinc-200 transition-all duration-300 ${isActive ? 'bg-zinc-600 text-zinc-200' : ''}`}>{page}</Link>
        </li>
    )
}

export default PaginationElement