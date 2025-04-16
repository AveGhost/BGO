import { GameSearchResults } from "@/types/GameSearchResults"
import Link from "next/link"
interface TableListProps {
    elements: GameSearchResults
}

const TableList = ({elements}: TableListProps) => {
    return (
        <ul className="flex flex-col gap-4 mt-4 px-2">
            {elements.content?.map(element => 
            <li className="text-zinc-400 cursor-pointer hover:text-white transition-colors duration-300" key={element.id}>
                <Link href={`/dashboard/add-post?id=${element.id}&title=${element.title}`}>{element.title}</Link>
            </li>)}
            {elements.content?.length === 0 && <li className="text-zinc-400">Nie znaleziono tytułu</li>}
        </ul>
    )
}

export default TableList