import FormSelectElement from "./form-select-element.component"

interface FormSelectWrapperProps {
    isOpen: boolean
    elements: string[]
    singleSelect?: (platform: string, id?: number) => void
    multiSelect?: (category: string) => void
}

const FormSelectWrapper = ({isOpen, elements,singleSelect,multiSelect}: FormSelectWrapperProps) => {
    return (
        <ul className={`absolute scale-y-0 opacity-0 bg-zinc-600 py-2 rounded-lg w-full top-10 right-0 left-0 flex flex-col transition-all duration-300 ${isOpen ? "scale-y-100 opacity-100 z-10" : ""}`}>
            {elements.map((element, index) => <FormSelectElement key={index} text={element} singleSelect={singleSelect} multiSelect={multiSelect} />)}
        </ul>
    )
}

export default FormSelectWrapper