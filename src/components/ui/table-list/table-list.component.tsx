import { GameSearchResults } from "@/types/GameSearchResults"

const TableList = ({elements}: {elements: GameSearchResults}) => {
    return (
        <ul className="flex flex-col gap-4 mt-4 px-2">
            {elements.content?.map(element => <li className="text-zinc-400" key={element.id}>{element.title}</li>)}
            {elements.content?.length === 0 && <li className="text-zinc-400">Nie znaleziono tytułu</li>}
        </ul>
    )
}

export default TableList