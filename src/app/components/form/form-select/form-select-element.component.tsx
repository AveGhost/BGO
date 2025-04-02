interface FormSelectElementProps {
    text: string
    choosePlatform?: (platform: string) => void
    chooseCategory?: (category: string) => void
}

const FormSelectElement = ({text, choosePlatform, chooseCategory}: FormSelectElementProps) => {
    const handleOnClick = () => {
        choosePlatform && choosePlatform(text)
        chooseCategory && chooseCategory(text)
    }
    return (
        <li className="hover:bg-zinc-500 px-4 py-2 w-full cursor-pointer transition-colors duration-300" onClick={handleOnClick}>{text}</li>
    )
}

export default FormSelectElement