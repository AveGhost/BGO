interface FormTextAreaProps {
    value: string
    placeholder: string
    name: string
    event: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const FormTextArea = ({value, event, placeholder, name}: FormTextAreaProps) => {
    return (
        <textarea
            value={value}
            className="w-full border border-zinc-600 rounded-lg py-2 px-4 min-h-[300px]"
            placeholder={placeholder}
            name={name}
            onChange={event}
        />
    )
}

export default FormTextArea