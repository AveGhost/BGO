'use client'

import FormWrapper from "../form/form-wrapper.component"
import FormInput from "../form/form-input.component"
import FormSelect from "../form/form-select/form-select.component"
import FormButton from "../form/form-button.component"
import GameCategory from "../other/game-category.component"
import platforms from "@/app/api/platforms"
import postGame from "@/app/utils/games/PostGame"
import { useState } from "react"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"

const AddGame = () => {
    const [isPlatformOpen, setIsPlatformOpen] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)
    const [thisPlatform, setThisPlatform] = useState("")
    const [thisCategories, setThisCategories] = useState<string[]>([])
    const [formData, setFormData] = useState({title: '', coverImage: '', description: '', platform: thisPlatform, categories: [] as string[]})

    const togglePlatform = () => {
        setIsPlatformOpen(!isPlatformOpen)
    }
    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen)
    }

    const choosePlatform = (platform: string) => {
        setThisPlatform(platform)
        setFormData((prev) => ({ ...prev, platform }));
        setIsPlatformOpen(false)
    }

    const chooseCategory = (category: string) => {
        setThisCategories((prevCategories) =>
          prevCategories.includes(category) ? prevCategories : [...prevCategories, category]
        );
        setFormData((prevFormData) => ({
            ...prevFormData,
            categories: prevFormData.categories.includes(category)
              ? prevFormData.categories
              : [...prevFormData.categories, category],
          }));
        setIsCategoryOpen(false);
    };

    const removeCategory = (category: string) => {
        setThisCategories((prevCategories) => prevCategories.filter((element) => element !== category))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const promise = postGame(formData)
            await toast.promise(promise, {
                loading: "Trwa dodawanie gry...",
                success: "Gra została dodana",
                error: (err) => err.message || 'Wystąpił błąd przy dodawaniu gry',
            })

            setTimeout(() => {
                redirect('/dashboard/add-post')
            }, 500)
        } catch (err) {}
    }

    return (
        <FormWrapper onSubmit={formSubmit}>
            <FormInput type="text" placeholder="Tytuł" name="title" value={formData.title} event={handleInputChange} icon="fluent:xbox-controller-48-regular" />
            <FormInput type="text" placeholder="Okładka gry" name="coverImage" value={formData.coverImage} event={handleInputChange} icon="material-symbols-light:image-outline" />
            <FormInput type="text" placeholder="Opis" name="description" value={formData.description} event={handleInputChange} icon="fluent:textbox-16-regular" />
            <FormSelect isOpen={isPlatformOpen} onClick={togglePlatform} icon="garden:platform-26" title={thisPlatform} elements={platforms} singleSelect={choosePlatform} />
            <FormSelect isOpen={isCategoryOpen} onClick={toggleCategory} icon="arcticons:rpg-simple-dice" title="Wybierz gatunki:" elements={["Action", "RPG", "MMO", "Fighting", "Survival"]} multiSelect={chooseCategory} />
            {thisCategories.length > 0 &&
                <ul className="flex items-center gap-4 flex-wrap">
                    {thisCategories.map((category) => <GameCategory key={category} category={category} removeCategory={removeCategory} />)}
                </ul>
            }
            <FormButton type="submit" text="Dodaj grę"/>
        </FormWrapper>
    )
}

export default AddGame