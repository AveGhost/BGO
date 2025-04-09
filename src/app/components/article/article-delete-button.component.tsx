import { Icon } from "@iconify/react/dist/iconify.js"

const ArticleDeleteButton = ({event}: {event: () => void}) => {
    return (
        <button className="flex gap-4 bg-rose-600 rounded-lg px-4 py-2 w-full items-center justify-center text-sm hover:bg-rose-900 transition-colors duration-300 cursor-pointer" onClick={event}>
            Usuń artykuł 
            <Icon icon="material-symbols-light:delete-outline-rounded" width="20" height="20" />
        </button>
    )
}

export default ArticleDeleteButton