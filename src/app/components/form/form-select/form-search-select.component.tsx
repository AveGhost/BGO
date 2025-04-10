import FormSelectWrapper from "./form-select-wrapper.component"
import SearchInput from "../../other/search-input.component"
import { GameSearchResults } from "@/app/mixins/GameSearchResults"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Game } from "@/app/mixins/GameTypes"
interface FormSearchSelectProps {
    isOpen: boolean
    onClick: () => void
    elements: Game[]
    choosen: string
    icon: string
    singleSelect?: (game: string, id?: number) => void
    searchResults: (data: GameSearchResults) => void
    deleteChoosen: () => void
}

const FormSearchSelect = ({isOpen,onClick,elements,singleSelect,searchResults,icon,choosen,deleteChoosen}: FormSearchSelectProps) => {
    return (
        <div className="w-full relative text-zinc-400" onClick={onClick}>
            {choosen ?
            <span className="w-full block py-2 px-4 border-1 border-zinc-600 rounded-lg text-white" onClick={deleteChoosen}>
                {choosen}
                <Icon icon={icon} width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
            </span>
            :
            <SearchInput onSearchResults={searchResults} />
            }
            <FormSelectWrapper isOpen={isOpen} elements={elements} singleSelect={singleSelect} />
        </div>
    )
}

export default FormSearchSelect