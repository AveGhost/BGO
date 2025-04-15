'use client'

import postNews from "@/utils/news/PostNews"
import { useState, useContext } from "react"
import FormWrapper from "@/components/ui/form/form-wrapper.component"
import FormInput from "@/components/ui/form/form-input.component"
import FormFile from "@/components/ui/form/form-file/form-file.component"
import FormTextArea from "@/components/ui/form/form-textarea.component"
import PreviewImage from "@/components/ui/add-edit-post/preview-image.component"
import PostFieldWrapper from "@/components/ui/add-edit-post/add-post-field-wrapper.component"
import { Field } from "@/types/PostField"
import AddFieldButtons from "@/components/ui/add-edit-post/add-field-buttons"
import SetSummaryCardWrapper from "@/components/ui/add-edit-post/set-summary-card-wrapper.component"
import RatingTableElement from "@/components/ui/article/rating-table-element.component"
import Button from "@/components/ui/button/button.component"
import { addField } from "@/mixins/addField"
import { updateField } from "@/mixins/updateFields"
import { handleFileSelect, handleDragOver, handleDrop } from "@/mixins/handleFileInput"
import { deleteField } from "@/mixins/deleteField"
import { AuthContext } from "@/context/AuthProvider"
import { PostFormData } from "@/types/PostFormData"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import SearchBox from "../ui/search-box/search-box.component"
import SelectedGame from "../ui/add-edit-post/selected-game.component"

interface GameProps {
    title: string
    id: number
}

const AddPostWrapper = () => {
    const user = useContext(AuthContext)?.user
    const [previewThumbnail, setPreviewThumbnail] = useState<string | undefined>(undefined)
    const [previewThumbnailUrl, setPreviewThumbnailUrl] = useState<string | undefined>(undefined)
    const [teaser, setTeaser] = useState<string>("")
    const [content, setContent] = useState<Field[]>([])
    const [reviewTitle, setReviewTitle] = useState("")
    const [score, setScore] = useState(0)
    const [selectedGame, setSelectedGame] = useState<GameProps>({
        title: "",
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
        game_id: selectedGame.id
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

    const chooseGame = (game: string, id?: number) => {
        setSelectedGame({ title: game , id: id ?? 0 })
    }

    const removeGame = () => {
        setSelectedGame({ title: "", id: 0 })
    }

    console.log(selectedGame)
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
                        <Button type="button" text="Dodaj" event={[() => setPreviewThumbnail(previewThumbnailUrl),() => setPreviewThumbnailUrl("")]}/>
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
                        classes="bg-zinc-900 p-4 rounded-lg"
                        iconClasses="right-6"
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
                        classes="bg-zinc-900 p-4 rounded-lg"
                    />
                </PostFieldWrapper>
                :
                <PostFieldWrapper key={field.id} fieldId={field.id} deleteField={handleDeleteField}>
                    <div key={field.id} className="flex flex-col p-4 rounded-lg bg-zinc-900">
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
                                <Button type="submit" text="Dodaj" event={[() => handleUpdateField(field.id, previewThumbnailUrl ?? ""), () => setPreviewThumbnailUrl("")]}/>
                            </div>
                        </FormFile>
                        : 
                        <PreviewImage
                            previewImage={field.content}
                            classes="w-full h-[650px] col-span-1"
                            deleteImage={() => handleUpdateField(field.id, "")}
                        />}
                        <span className="w-full mt-4">
                            <FormInput
                                type="text"
                                placeholder="Dodaj adnotacje"
                                name={`${field.type}_${field.id}`}
                                value={field.description ?? ""}
                                event={(e) => handleUpdateField(field.id, field.content, e.target.value)}
                            />
                        </span>
                    </div>
                </PostFieldWrapper>
            ))}
            <AddFieldButtons addField={handleAddField} />
            <SetSummaryCardWrapper score={score} setScore={setScore}>
                {selectedGame.title ?
                    <SelectedGame text={selectedGame.title} event={removeGame} />
                : 
                    <SearchBox event={chooseGame} />
                }
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
            <div className="flex justify-between gap-8 my-8">
                <ul className="flex flex-col gap-4 w-full">
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
                    {plus && <Button type="button" text="Dodaj" event={() => addPlus()} />}
                </ul>
                <ul className="flex flex-col gap-4 w-full">
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
                    {minus && <Button type="button" text="Dodaj" event={() => addMinus()} />}
                </ul>
            </div>
            <Button type="submit" text="Dodaj recenzje" classes="bg-green-800" />
        </FormWrapper>
    )
}

export default AddPostWrapper