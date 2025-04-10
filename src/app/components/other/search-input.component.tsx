'use client'

import FormInput from "../form/form-input.component"
import { searchGames } from "@/app/utils/games/SearchGames"
import { useState, useEffect } from "react"
import { GameSearchResults } from "@/app/mixins/GameSearchResults"

interface SearchInputProps {
    onSearchResults: (data: GameSearchResults) => void
    placeholder?: string
}

const SearchInput = ({ onSearchResults, placeholder }: SearchInputProps) => {
    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [debounceResults, setDebounceResults] = useState(search)

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        setIsSearching(true)
    }

    useEffect(() => {
        const handleSearch = setTimeout(() => {
            setDebounceResults(search)
        },500)

        return () => {
            clearTimeout(handleSearch)
        }
    },[search])

    useEffect(() => {
        const fetchSearch = async () => {
            const data = await searchGames({ title: debounceResults})
            setIsSearching(false)
            onSearchResults(data)
        }

        if(debounceResults.length >= 0) {
            fetchSearch()
        }
    },[debounceResults])

    return (
        <>
            <FormInput
                type="text"
                name="search"
                placeholder={placeholder ? placeholder : "Wyszukaj..."}
                value={search}
                icon={isSearching ? "codex:loader" : "ic:round-search"}
                event={searchHandler}
            />
        </>
    )
}

export default SearchInput