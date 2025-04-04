import { Icon } from "@iconify/react/dist/iconify.js"
import FormSelectWrapper from "./form-select-wrapper.component"

interface FormSelectProps {
    isOpen: boolean
    onClick: () => void
    icon: string
    title: string | null
    elements: string[]
    singleSelect?: (platform: string, id?: number) => void
    multiSelect?: (category: string) => void
}
const FormSelect = ({isOpen,onClick,icon,title,elements,singleSelect,multiSelect}: FormSelectProps) => {
    return (
        <div className="w-full relative py-2 px-4 border-1 border-zinc-600 rounded-lg text-zinc-400">
            <span onClick={onClick} className={`cursor-pointer w-full block ${title !== '' ? 'text-zinc-300' : ''}`}>{title ? title : 'Wybierz platforme do recenzji:'}
                <Icon icon={icon} width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
            </span>
            <FormSelectWrapper isOpen={isOpen} elements={elements} singleSelect={singleSelect} multiSelect={multiSelect} />
        </div>
    )
}

export default FormSelect