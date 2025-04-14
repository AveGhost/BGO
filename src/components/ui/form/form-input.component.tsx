import { Icon } from "@iconify/react/dist/iconify.js"

interface FormInputProps {
    icon?: string
    type: string
    name: string
    placeholder: string
    value: string
    event: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const FormInput = ({icon, type, placeholder, name, value, event}: FormInputProps) => {
    return (
        <div className="relative w-full">
            {icon && <Icon icon={icon} width="24" height="24" className="absolute top-1/2 right-2 -translate-y-1/2 text-zinc-400" />}
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={event} className="w-full py-2 px-4 border-1 border-zinc-600 rounded-lg pr-10" />
        </div>
    )
}

export default FormInput