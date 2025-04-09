'use client'

import ArticleDeleteButton from "./article-delete-button.component"
import ArticleEditButton from "./article-edit-button.component"
import WarrningPopup from "../other/warrning-popup.component"
import { AuthContext } from "@/app/context/AuthProvider"
import { useState, useContext } from "react"
const ArticleAction = ({pageId}: {pageId: number}) => {
    const [isOpen, setIsOpen] = useState(false)
    const {user} = useContext(AuthContext)!

    if(user?.userRole !== "ADMINISTRATOR") return
    
    return (
        <>
            <div className="fixed left-2 p-2 w-[200px] h-[200px] bottom-0 flex flex-col items-center justify-center gap-4">
                <ArticleEditButton pageId={pageId} />
                <ArticleDeleteButton event={() => setIsOpen(true)} />
            </div>
            {isOpen && <WarrningPopup text="Czy na pewno chcesz usunąć artykuł?" event={() => setIsOpen(false)} pageId={pageId} />}
        </>
    )
}

export default ArticleAction