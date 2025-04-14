import Steps from "@/components/ui/add-edit-post/steps.component"
import AddPostWrapper from "@/components/add-post/add-post-wrapper.component"
const AddPost = () => {
    return (
        <div className="container max-w-[1200px] mx-auto py-6">
            <Steps />
            <AddPostWrapper />
        </div>
    )
}

export default AddPost