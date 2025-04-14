import { Game } from "@/types/GameTypes"

interface FormSearchSelectElementProps {
    element: Game
    singleSelect?: (platform: string, id?: number) => void
}

const FormSearchSelectElement = ({element, singleSelect}: FormSearchSelectElementProps) => {
    const handleOnClick = () => {
        singleSelect && singleSelect(element.title, parseInt(element.id))
    }
    return (
        <li className="hover:bg-zinc-500 px-4 py-2 w-full cursor-pointer transition-colors duration-300" onClick={handleOnClick}>{element.title}</li>
    )
}

export default FormSearchSelectElement