import { Icon } from "@iconify/react/dist/iconify.js"
import FormInput from "../form-input.component"

interface FormFileProps {
    icon?: string
    event: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
    handleDrop?: (event: React.DragEvent<HTMLDivElement>) => void
    id: number | string
    name: string
    update?: (e: React.ChangeEvent<HTMLInputElement>) => void
    children?: React.ReactNode
}

const FormFile = ({icon, event, handleDragOver, handleDrop, id, name,children}: FormFileProps) => {
    return (
        <div className="relative w-full px-4 border-1 border-zinc-600 rounded-lg min-h-[480px] flex flex-col justify-center items-center">
            <div className="border border-dashed border-zinc-400 rounded-lg flex justify-center items-center flex-col" onDragOver={handleDragOver} onDrop={handleDrop}>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id={id!.toString()}
                    name={name}
                    onChange={event}
                    className="hidden"
                />
                <label htmlFor={id!.toString()} className="cursor-pointer p-4 flex flex-col justify-center items-center">
                    {icon && <Icon icon={icon} width="96" height="96" className="text-zinc-400"/>}
                    <span className="text-center text-sm text-zinc-400">Wybierz lub przeciągnij obrazek</span>
                </label>
                {children}
            </div>
        </div>
    )
}

export default FormFile