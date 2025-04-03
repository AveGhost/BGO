import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

interface FormFileProps {
    icon?: string
    event: (e: React.ChangeEvent<HTMLInputElement>) => void
    previewImage?: string
    deleteImage?: () => void
    handleDragOver?: (event: React.DragEvent<HTMLDivElement>) => void
    handleDrop?: (event: React.DragEvent<HTMLDivElement>) => void
}

const FormFile = ({icon, event, previewImage, deleteImage, handleDragOver, handleDrop}: FormFileProps) => {
    return (
        <div className="relative w-full px-4 border-1 border-zinc-600 rounded-lg min-h-[480px] flex flex-col justify-center items-center">
            <div className={`${!previewImage ? "border border-dashed border-zinc-600" : ""} rounded-lg flex justify-center items-center flex-col`} onDragOver={handleDragOver} onDrop={handleDrop}>
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    id="image"
                    name="image"
                    required
                    onChange={event}
                    className="hidden"
                />
                {previewImage ?(
                    <div className="w-[1200px] h-[650px] relative cursor-pointer group" onClick={deleteImage}>
                        <Image src={previewImage} alt="Preview" fill className="rounded-lg object-cover group-hover:opacity-30 transition-opacity duration-300"/>
                        <Icon icon="material-symbols:close-rounded" width="96" height="96" className="text-red-500 z-10 absolute left-0 right-0 top-0 bottom-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </div>
                ):
                    <label htmlFor="image" className="cursor-pointer p-4 flex flex-col justify-center items-center">
                        {icon && <Icon icon={icon} width="96" height="96" className="text-zinc-400"/>}
                        <span className="text-center text-sm text-zinc-400">Wybierz lub przeciągnij obrazek</span>
                    </label>
                }
            </div>
        </div>
    )
}

export default FormFile