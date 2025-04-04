interface FormButtonProps {
    text: string
    event?: () => void
    type?: "submit" | "button"
}

const FormButton = ({text,event,type}: FormButtonProps) => {
    return (
        <button type={type ?? "button"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full" onClick={event}>{text}</button>
    )
}

export default FormButton