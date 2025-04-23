'use client'

import SearchInput from "../search-input/search-input.component"
import { useEffect, useState } from "react"
import { GameSearchResults } from "@/types/GameSearchResults"
import TableList from "./table-list.component"
import { Skeleton } from "../skeleton"
import getGames from "@/utils/games/GetGame"

const TableListWrapper = () => {
    const [results, setResults] = useState<GameSearchResults>({content: [], page: {size: 0, totalElements: 0, totalPages: 0, number: 0}})
    const [isLoading, setIsLoading] = useState(true);

    const handleSearchResults = (data: GameSearchResults) => {
        setResults(data);
        if(data.page.size === 0) {
            fetchGames()
        }
    }

    const fetchGames = async () => {
        setIsLoading(true)
        const data = await getGames()
        if(data.content.length === 0) {
            setIsLoading(false)
            return
        }
        setResults(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchGames()
    },[])

    return (
        <div className="border-1 border-zinc-600 row-1 mt-6 md:mt-0 w-full md:row-auto p-4 rounded-lg xl:absolute left-0 md:max-w-[350px]">
            <h2 className="text-2xl mb-4">Ostatnio dodane gry</h2>
            <SearchInput onSearchResults={handleSearchResults}  />
            {isLoading ? (
                <div className="space-y-4">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="w-full h-5 rounded-lg mt-6" />
                    ))}
                </div>
            ) : (
                <TableList elements={results} />
            )}
        </div>
    )
}

export default TableListWrapper