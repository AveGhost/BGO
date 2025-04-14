import { GameSearchResults } from "@/types/GameSearchResults"

const GameList = ({games}: {games: GameSearchResults}) => {
    return (
        <ul className="flex flex-col gap-4 mt-4 px-2">
            {games.content?.map(game => <li className="text-zinc-400" key={game.id}>{game.title}</li>)}
            {games.content?.length === 0 && <li className="text-zinc-400">Nie znaleziono tytułu</li>}
        </ul>
    )
}

export default GameList