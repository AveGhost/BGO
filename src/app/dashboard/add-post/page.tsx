'use client'

import getGames from "@/app/utils/games/GetGame"
import { useEffect, useState } from "react"
import FormWrapper from "@/app/components/form/form-wrapper.component"
import FormInput from "@/app/components/form/form-input.component"
import FormFile from "@/app/components/form/form-file.component"
import Image from "next/image"
const AddPost = () => {
    const [games, setGames] = useState([])
    const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(undefined)

    const handleImagePreview = (file: File | null) => {
        if(file) {
            setPreviewThumbnail(URL.createObjectURL(file))
        }
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        handleImagePreview(file);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0] || null;
        handleImagePreview(file);
    };

    const handleDeletePreview = () => {
        setPreviewThumbnail(undefined)
    }

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await getGames()
                setGames(response.content)
            } catch (error) {
                console.error(error)
            }
        }
        fetchGames()
    },[])

    return (
        <div className="container max-w-[1200px] mx-auto py-6">
            <FormWrapper onSubmit={() => {}} isDataValid={null}>
                <FormInput icon="material-symbols:title-rounded" type="text" placeholder="Wpisz tytuł recenzji" name="title" value="" event={() => {}} />
                <FormFile icon="material-symbols:upload-rounded" event={handleFileSelect} previewImage={previewThumbnail} deleteImage={handleDeletePreview} handleDragOver={handleDragOver} handleDrop={handleDrop} />
                <div className="grid grid-cols-3">
                    <button>Dodaj pole z obrazkiem</button>
                    <button>Dodaj Nagłówek</button>
                    <button>Dodaj treść</button>
                </div>
            </FormWrapper>
        </div>
    )
}

export default AddPost