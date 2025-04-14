'use client'

import SearchInput from "../search-input/search-input.component"
import { useState } from "react"
import { GameSearchResults } from "@/types/GameSearchResults"
import TableList from "./table-list.component"

const TableListWrapper = () => {
    const [results, setResults] = useState<GameSearchResults>({content: [], page: {size: 0, totalElements: 0, totalPages: 0, number: 0}})
    return (
        <div className="border-1 border-zinc-600 w-full p-4 rounded-lg absolute left-0 max-w-[350px]">
            <h2 className="text-2xl mb-4">Ostatnio dodane gry</h2>
            <SearchInput onSearchResults={setResults} />
            <TableList elements={results} />
        </div>
    )
}

export default TableListWrapper