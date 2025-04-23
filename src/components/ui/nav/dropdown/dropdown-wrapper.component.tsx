import DropDownElement from "./dropdown-element.component"
import { Logout } from "@/utils/logout"
import { Roles } from "@/types/RoleTypes"

interface DropDownWrapperProps {
    role: string
    toggleDropDown: () => void
}
const DropDownWrapper = ({role, toggleDropDown}: DropDownWrapperProps) => {
    const logout = Logout()
    return (
        <ul className="absolute left-0 w-full min-w-[220px] flex flex-col top-15 bg-zinc-600 p-4 rounded-lg">
            {role === Roles.EDITOR || role === Roles.ADMINISTRATOR ? <DropDownElement url="/dashboard/add-game" name="Dodaj recencje" icon="ic:round-post-add" onClick={toggleDropDown} /> : null}
            {role === Roles.EDITOR || role === Roles.ADMINISTRATOR ? <DropDownElement url="/dashboard/my-posts" name="Twoje posty" icon="dashicons:admin-post" onClick={toggleDropDown} /> : null}
            {role === Roles.ADMINISTRATOR && <DropDownElement url="/" name="Wszystkie posty" icon="ic:round-all-inbox" onClick={toggleDropDown} />}
            <DropDownElement url="/dashboard/edit-profile" name="Edytuj profil" icon="carbon:settings" onClick={toggleDropDown} />
            <DropDownElement url="/" name="Wyloguj" icon="hugeicons:logout-04" onClick={logout} />
        </ul>
    )
}

export default DropDownWrapper