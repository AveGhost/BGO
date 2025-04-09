'use client'

import getGames from "@/app/utils/games/GetGame"
import postNews from "@/app/utils/news/PostNews"
import { useEffect, useState, useContext } from "react"
import FormWrapper from "@/app/components/form/form-wrapper.component"
import FormInput from "@/app/components/form/form-input.component"
import FormFile from "@/app/components/form/form-file/form-file.component"
import FormTextArea from "@/app/components/form/form-textarea.component"
import PreviewImage from "@/app/components/other/preview-image.component"
import PostFieldWrapper from "@/app/components/add-post/add-post-field-wrapper.component"
import { Field } from "@/app/mixins/PostField"
import AddFieldButtons from "@/app/components/add-post/add-field-buttons"
import SetSummaryCardWrapper from "@/app/components/add-post/set-summary-card-wrapper.component"
import RatingTableElement from "@/app/components/review/rating-table-element.component"
import FormButton from "@/app/components/form/form-button.component"
import FormSelect from "@/app/components/form/form-select/form-select.component"
import { addField } from "@/app/utils/fileHandlers/addField"
import { updateField } from "@/app/utils/fileHandlers/updateFields"
import { handleFileSelect, handleDrop, handleDragOver } from "@/app/utils/fileHandlers/handleFileInput"
import { deleteField } from "@/app/utils/fileHandlers/deleteField"
import { AuthContext } from "@/app/context/AuthProvider"
import { PostFormData } from "@/app/mixins/PostFormData"
import { redirect } from "next/navigation"
import Steps from "@/app/components/article/steps.component"
import toast from "react-hot-toast"

interface GameProps {
    title: string
    id: number
}

const AddPost = () => {
    const user = useContext(AuthContext)?.user
    const [games, setGames] = useState<GameProps[]>([])
    const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(undefined)
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = useState<string | undefined>(undefined)
    const [teaser, setTeaser] = useState<string>("")
    const [content, setContent] = useState<Field[]>([])
    const [reviewTitle, setReviewTitle] = useState("")
    const [score, setScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedGame, setSelectedGame] = useState<GameProps>({
        title: "Wybierz gre",
        id: 0
    })
    const [summaryTitle, setSummaryTitle] = useState("")
    const [summaryContent, setSummaryContent] = useState("")
    const [plusList, setPlusList] = useState<string[]>([])
    const [plus, setPlus] = useState("")
    const [minusList, setMinusList] = useState<string[]>([])
    const [minus, setMinus] = useState("")
    const [formData, setFormData] = useState<PostFormData>({
        title: reviewTitle,
        thumbnail: previewThumbnail ?? "",
        teaser: teaser,
        content: content,
        summaryTitle: summaryTitle,
        summaryContent: summaryContent,
        plusList: plusList,
        minusList: minusList,
        score: score,
        publishDate: `${Date.now().toString()}`,
        author_id: user?.id ?? 1,
        game_id: 1
    })

    const handleAddField = addField(setContent);
    const handleUpdateField = updateField(setContent);
    const handleDeleteField = deleteField(setContent);

    const addPlus = () => {
        setPlusList([...plusList, plus])
        setPlus("")
    }

    const removePlus = (id: number) => {
        setPlusList(prevPlusList => prevPlusList.filter((_, index) => index !== id))
    }

    const addMinus = () => {
        setMinusList([...minusList, minus])
        setMinus("")
    }

    const removeMinus = (id: number) => {
        setMinusList(prevMinusList => prevMinusList.filter((_, index) => index !== id))
    }

    const toggleSelect = () => {
        setIsOpen(!isOpen)
    }

    const chooseGame = (game: string) => {
        setSelectedGame({ title: game , id: 0 })
        setIsOpen(false)
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

    useEffect(() => {
        const findGameId = (gameTitle: string) => {
            const gameId = games.find(game => game.title === gameTitle)?.id
            setSelectedGame({ title: gameTitle, id: gameId ?? 0 })
        }

        findGameId(selectedGame.title)
    },[selectedGame.title])


    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const updatedFormData = {
            ...formData,
            title: reviewTitle,
            thumbnail: previewThumbnail ?? "",
            teaser: teaser,
            content: content,
            summaryTitle: summaryTitle,
            summaryContent: summaryContent,
            plusList: plusList,
            minusList: minusList,
            score: score,
            publishDate: new Date().toISOString(),
            author_id: user?.id ?? 1,
            game_id: selectedGame.id,
        };
        setFormData(updatedFormData);
        console.log(updatedFormData);
        try {
            const promise = postNews(updatedFormData)
            await toast.promise(promise, {
                loading: 'Publikowanie...',
                success: 'Pomyślnie opublikowano!',
                error: (err) => err.message || 'Wystąpił błąd przy dodawaniu artykułu',
            })

            setTimeout(() => {
                redirect("/")
            },500)
        } catch (error) {}
    }

    return (
        <div className="container max-w-[1200px] mx-auto py-6">
            <Steps />
            <FormWrapper onSubmit={handleFormSubmit}>
                <FormInput icon="material-symbols:title-rounded" type="text" placeholder="Wpisz tytuł recenzji" name="title" value={reviewTitle} event={(e) => setReviewTitle(e.target.value)} />
                {!previewThumbnail ?
                    <FormFile 
                        icon="material-symbols:upload-rounded"
                        id="image" 
                        name="image" 
                        event={(e) => handleFileSelect(e, setPreviewThumbnail)} 
                        handleDragOver={(e) => handleDragOver(e)} 
                        handleDrop={(e) => handleDrop(e, setPreviewThumbnail)}
                    >
                        <span className="text-sm text-zinc-400">Lub</span>
                        <div className="grid grid-cols-[1fr_120px] gap-4 p-4 text-sm">
                            <FormInput icon="material-symbols:cloud-upload-rounded" type="text" placeholder="Wpisz link do obrazka" name="thumbnail_url" value={previewThumbnailUrl ?? ""} event={(e) => setPreviewThumbnailUrl(e.target.value)} />
                            <FormButton type="button" text="Dodaj" event={[() => setPreviewThumbnail(previewThumbnailUrl),() => setPreviewThumbnailUrl("")]}/>
                        </div>
                    </FormFile>
                : <PreviewImage classes="w-[1200px] h-[650px]" previewImage={previewThumbnail} deleteImage={() => setPreviewThumbnail(undefined)}/>}
                <FormTextArea value={teaser} placeholder="Wpisz podtytuł" name="teaser" event={(e) => setTeaser(e.target.value)} />
                {content.map((field) => (
                    field.type === 'HEADING' ?
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <FormInput
                            key={field.id}
                            type="text"
                            placeholder="Wpisz Nagłówek"
                            name={`${field.type}_${field.id}`}
                            value={field.content}
                            icon="material-symbols:title-rounded"
                            event={(e) => handleUpdateField(field.id, e.target.value)}
                        />
                    </PostFieldWrapper>
                    : field.type === 'PARAGRAPH' ?
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <FormTextArea
                            key={field.id}
                            value={field.content}
                            placeholder="Wpisz treść"
                            name={`${field.type}_${field.id}`}
                            event={(e) => handleUpdateField(field.id, e.target.value)}
                        />
                    </PostFieldWrapper>
                    :
                    <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                        <div key={field.id} className="grid grid-cols-[180px_1fr]">
                            <span className="place-content-end pr-3">
                                <FormInput
                                    type="text"
                                    placeholder="Dodaj adnotacje"
                                    name={`${field.type}_${field.id}`}
                                    value={field.description ?? ""}
                                    event={(e) => handleUpdateField(field.id, field.content, e.target.value)}
                                />
                            </span>
                            {!field.content ?
                            <FormFile
                                icon="material-symbols:upload-rounded"
                                id={field.id}
                                name={`${field.type}_${field.id}`}
                                event={(e) => handleFileSelect(e, undefined, field.id, setContent)}
                                update={(e) => handleUpdateField(field.id, e.target.value)}
                                handleDragOver={(e) => e.preventDefault()}
                                handleDrop={(e) => handleDrop(e, undefined, field.id, setContent)}
                            >
                                <span className="text-sm text-zinc-400">Lub</span>
                                <div className="grid grid-cols-[1fr_120px] gap-4 p-4 text-sm">
                                    <FormInput icon="material-symbols:cloud-upload-rounded" type="text" placeholder="Wpisz link do obrazka" name="thumbnail_url" value={previewThumbnailUrl ?? ""} event={(e) => setPreviewThumbnailUrl(e.target.value)} />
                                    <FormButton type="submit" text="Dodaj" event={[() => handleUpdateField(field.id, previewThumbnailUrl ?? ""), () => setPreviewThumbnailUrl("")]}/>
                                </div>
                            </FormFile>
                            : 
                            <PreviewImage
                                previewImage={field.content}
                                classes="w-full h-[400px] col-span-1"
                                deleteImage={() => handleUpdateField(field.id, "")}
                            />}
                        </div>
                    </PostFieldWrapper>
                ))}
                <AddFieldButtons addField={handleAddField} />
                <SetSummaryCardWrapper score={score} setScore={setScore}>
                    <FormSelect isOpen={isOpen} onClick={toggleSelect} icon="arcticons:rpg-simple-dice" title={selectedGame.title} elements={games.map((game) => (game.title))} singleSelect={chooseGame} />
                    <FormInput 
                        icon="material-symbols:title-rounded" 
                        type="text" 
                        placeholder="Wpisz tytuł podsumowania" 
                        name="summary_title" 
                        value={summaryTitle} 
                        event={(e) => setSummaryTitle(e.target.value)} 
                    />
                    <FormTextArea 
                        value={summaryContent} 
                        placeholder="Wpisz podtytuł" 
                        name="summary_content" 
                        event={(e) => setSummaryContent(e.target.value)} 
                    />
                </SetSummaryCardWrapper>
                <div className="flex justify-between my-8">
                    <ul className="flex flex-col gap-4">
                        {plusList.map((plus, index) =>( 
                            <PostFieldWrapper key={index} fieldId={index} deleteField={removePlus} classes="flex items-center flex-row-reverse justify-between gap-2" iconClass="relative top-0 right-0">
                                <RatingTableElement text={plus} icon="ic:round-plus" isPositive />
                            </PostFieldWrapper>
                        ))}
                        <FormInput
                            icon="ic:round-plus"
                            type="text"
                            placeholder="Wpisz plus"
                            name="pluses"
                            value={plus}
                            event={(e) => setPlus(e.target.value)}
                        />
                        {plus && <FormButton type="button" text="Dodaj" event={() => addPlus()} />}
                    </ul>
                    <ul className="flex flex-col gap-4">
                        {minusList.map((minus, index) =>(
                            <PostFieldWrapper key={index} fieldId={index} deleteField={removeMinus} classes="flex items-center flex-row-reverse justify-between gap-2" iconClass="relative top-0 right-0">
                                <RatingTableElement text={minus} icon="ic:round-minus" isPositive={false} />
                            </PostFieldWrapper>
                        ))}
                        <FormInput
                            icon="ic:round-minus"
                            type="text"
                            placeholder="Wpisz minus"
                            name="minuses"
                            value={minus}
                            event={(e) => setMinus(e.target.value)}
                        />
                        {minus && <FormButton type="button" text="Dodaj" event={() => addMinus()} />}
                    </ul>
                </div>
                <FormButton type="submit" text="Dodaj recenzje" />
            </FormWrapper>
        </div>
    )
}

export default AddPost