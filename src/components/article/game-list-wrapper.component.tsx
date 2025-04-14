'use client'

import SearchInput from "../other/search-input.component"
import { useState } from "react"
import { GameSearchResults } from "@/types/GameSearchResults"
import GameList from "./game-list.component"

const GameListWrapper = () => {
    const [results, setResults] = useState<GameSearchResults>({content: [], page: {size: 0, totalElements: 0, totalPages: 0, number: 0}})
    console.log(results)
    return (
        <div className="border-1 border-zinc-600 w-full p-4 rounded-lg absolute left-0 max-w-[350px]">
            <h2 className="text-2xl mb-4">Ostatnio dodane gry</h2>
            <SearchInput onSearchResults={setResults} />
            <GameList games={results} />
        </div>
    )
}

export default GameListWrapper