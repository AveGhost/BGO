const FormButton = ({text}: { text: string }) => {
    return (
        <button type="submit" className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full">{text}</button>
    )
}

export default FormButton