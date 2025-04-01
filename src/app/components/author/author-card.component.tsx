import AuthorAvatar from "./author-avatar.component"
import AuthorName from "./author-name.component"
import AuthorDescription from "./author-description.component"
import AuthorRole from "./author-role.component"
import Date from "../other/date.component"

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
            {avatar && <AuthorAvatar avatar={avatar}/>}
            <div className={`flex gap-1 ${avatar ? "flex-col" : "justify-between items-center w-full"}`}>
                {name && <AuthorName name={name}/>}
                {date && <Date date={date}/>}
                {role && <AuthorRole role={role}/>}
                {description && <AuthorDescription description={description}/>}
            </div>
        </div>
    )
}

export default AuthorCard