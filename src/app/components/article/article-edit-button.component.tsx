import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"

const ArticleEditButton = ({pageId}: {pageId: number}) => {
    return (
        <Link href={`/dashboard/edit-post?id=${pageId}`} className="flex gap-4 bg-sky-600 items-center justify-center rounded-lg px-4 py-2 w-full text-sm hover:bg-sky-800 transition-colors duration-300 cursor-pointer">
            Edytuj artykuł 
            <Icon icon="tabler:edit" width="20" height="20" />
        </Link>
    )
}

export default ArticleEditButton