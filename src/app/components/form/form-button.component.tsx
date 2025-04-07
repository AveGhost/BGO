type EventHandler = (() => void) | (() => void)[];

interface FormButtonProps {
    text: string
    event?: EventHandler
    type?: "submit" | "button"
}

const FormButton = ({text,event,type}: FormButtonProps) => {
    const handleClick = () => {
        if (Array.isArray(event)) {
            event.forEach(fn => fn());
        } else {
            event?.();
        }
    };
    return (
        <button type={type ?? "button"} className="bg-zinc-600 py-2 px-4 rounded-lg cursor-pointer hover:opacity-70 transition-opacity duration-300 w-full" onClick={handleClick}>{text}</button>
    )
}

export default FormButton