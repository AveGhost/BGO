import { Icon } from "@iconify/react/dist/iconify.js"

const GameCategory = ({category, removeCategory}: {category: string, removeCategory: (category: string) => void}) => {
    return (
        <span className="text-sm bg-zinc-600/40 text-zinc-300 py-1 px-2 rounded max-w-fit hover:bg-zinc-600/10 transition-colors duration-300 flex items-center gap-1 cursor-pointer" onClick={() => removeCategory(category)}><Icon icon="iconamoon:close-thin" width="14" height="14" color="red" />{category}</span>
    )
}

export default GameCategory