import Image from "next/image"
import {Icon} from '@iconify/react'

interface AuthorCardProps {
    avatar?: string
    name: string
    role?: string
    description?: string
    date?: string
}

const AuthorCard = ({avatar,name,role,description,date}: AuthorCardProps) => {
    return (
        <div className="flex gap-4 items-start p-4">
            {avatar ?
            <Image
                src={avatar}
                alt="author"
                width={48}
                height={48}
                className="rounded-full"
            />
            : <Icon icon="qlementine-icons:user-24" width="48" height="48" />}
            <div className="flex flex-col gap-1">
                {name &&<h3>{name}</h3>}
                {date &&<span className="text-sm text-zinc-400">{date}</span>}
                {role && <span className="text-sm text-zinc-400">{role}</span>}
                {description &&<p className="text-sm text-zinc-300">{description}</p>}
            </div>
        </div>
    )
}

export default AuthorCard