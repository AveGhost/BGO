import EditProfileWrapper from "@/components/edit-profile/edit-profile-wrapper.component"
import RequireAuth from "@/context/RequireAuth"
const EditProfile = () => {
    return (
        <RequireAuth>
            <div className="container mx-auto h-full flex flex-col items-center justify-center grow py-6">
                <EditProfileWrapper />
            </div>
        </RequireAuth>
    )
}

export default EditProfile