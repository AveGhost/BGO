interface FormSelectElementProps {
    text: string
    singleSelect?: (platform: string, id?: number) => void
    multiSelect?: (category: string) => void
}

const FormSelectElement = ({text, singleSelect, multiSelect}: FormSelectElementProps) => {
    const handleOnClick = () => {
        singleSelect && singleSelect(text as string)
        multiSelect && multiSelect(text as string)
    }
    return (
        <li className="hover:bg-zinc-500 px-4 py-2 w-full cursor-pointer transition-colors duration-300" onClick={handleOnClick}>{text}</li>
    )
}

export default FormSelectElement