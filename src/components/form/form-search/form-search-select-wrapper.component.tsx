import FormSelectElement from "./form-search-select-element.component"
import { Game } from "@/types/GameTypes"
interface FormSearchSelectWrapperProps {
    isOpen: boolean
    elements: Game[]
    singleSelect?: (platform: string, id?: number) => void
}

const FormSearchSelectWrapper = ({isOpen, elements,singleSelect}: FormSearchSelectWrapperProps) => {
    return (
        <ul className={`absolute scale-y-0 opacity-0 bg-zinc-600 py-2 rounded-lg w-full top-10 right-0 left-0 flex flex-col transition-all duration-300 ${isOpen ? "scale-y-100 opacity-100 z-10" : ""}`}>
            {elements.map((element, index) => <FormSelectElement key={index} element={element} singleSelect={singleSelect} />)}
        </ul>
    )
}

export default FormSearchSelectWrapper