import DropDownElement from "./dropdown-element.component"
import { Logout } from "@/utils/logout"

interface DropDownWrapperProps {
    role: string
    toggleDropDown: () => void
}
const DropDownWrapper = ({role, toggleDropDown}: DropDownWrapperProps) => {
    const logout = Logout()
    return (
        <div className="absolute left-0 w-full min-w-[220px] flex flex-col top-15 bg-zinc-600 p-4 rounded-lg">
            <DropDownElement url="/dashboard/add-game" name="Dodaj recencje" icon="ic:round-post-add" onClick={toggleDropDown} />
            <DropDownElement url="/dashboard/my-posts" name="Twoje posty" icon="dashicons:admin-post" onClick={toggleDropDown} />
            {role === 'ADMINISTRATOR' ? <DropDownElement url="/" name="Wszystkie posty" icon="ic:round-all-inbox" onClick={toggleDropDown} /> : null}
            <DropDownElement url="/" name="Edytuj profil" icon="carbon:settings" onClick={toggleDropDown} />
            <DropDownElement url="/" name="Wyloguj" icon="hugeicons:logout-04" onClick={logout} />
        </div>
    )
}

export default DropDownWrapper