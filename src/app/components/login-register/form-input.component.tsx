import { Icon } from "@iconify/react/dist/iconify.js"

interface FormInputProps {
    icon: string
    type: string
    name: string
    placeholder: string
}
const FromInput = ({icon, type, placeholder, name}: FormInputProps) => {
    return (
        <div className="relative w-full">
            <Icon icon={icon} width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />
            <input type={type} placeholder={placeholder} name={name} className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg" />
        </div>
    )
}

export default FromInput