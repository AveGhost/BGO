'use client'

import Button from "../button/button.component"
import LinkButton from "../link-button/link-button.component"
import Popup from "../popup/popup.component"
import { AuthContext } from "@/context/AuthProvider"
import { useState, useContext } from "react"
const ArticleAction = ({pageId}: {pageId: number}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useContext(AuthContext)!

    if(user?.userRole !== "ADMINISTRATOR" && user?.userRole !== "EDITOR") return
    
    return (
        <>
            <div className="fixed left-2 p-2 w-[200px] h-[200px] bottom-0 flex flex-col items-center justify-center gap-4">
                <LinkButton text="Edytuj artykuł" href={`/dashboard/edit-post?id=${pageId}`} icon="tabler:edit" classes="text-sm" backgroundColor="bg-sky-600" />
                <Button text="Usun artykuł" event={() => setIsOpen(true)} icon="material-symbols-light:delete-outline-rounded" classes="text-sm" backgroundColor="bg-rose-600" />
            </div>
            {isOpen && <Popup text="Czy na pewno chcesz usunąć artykuł?" event={() => setIsOpen(false)} pageId={pageId} />}
        </>
    )
}

export default ArticleAction