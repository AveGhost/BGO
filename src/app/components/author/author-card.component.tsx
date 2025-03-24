import Image from "next/image"

interface AuthorCardProps {
    avatar?: string
    name: string
    role?: string
    description?: string
    date?: string
}

const AuthorCard = ({avatar,name,role,description,date}: AuthorCardProps) => {
    return (
        <div className="flex gap-4 items-start p-4 mt-auto">
            {avatar &&
            <Image
                src={avatar}
                alt="author"
                width={48}
                height={48}
                className="rounded-full"
            />}
            <div className={`flex gap-1 ${avatar ? "flex-col" : "justify-between items-center w-full"}`}>
                {name &&<h3 className="text-sm">{name}</h3>}
                {date &&<span className="text-sm text-zinc-400">{date}</span>}
                {role && <span className="text-sm text-zinc-400">{role}</span>}
                {description &&<p className="text-sm text-zinc-300">{description}</p>}
            </div>
        </div>
    )
}

export default AuthorCard