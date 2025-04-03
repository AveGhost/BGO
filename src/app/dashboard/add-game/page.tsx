import AddGame from "@/app/components/add-post/add-game.component"
const AddGamePage = () => {
    return (
        <div className="container mx-auto h-full flex flex-col items-center justify-center grow">
            <div className="form w-full max-w-[450px] min-h-[350px] p-4">
                <div className="flex flex-col gap-4 justify-center items-center h-full">
                    <h1 className="text-2xl text-center mb-6">Dodaj recenzowaną grę</h1>
                    <AddGame />
                </div>
            </div>
        </div>
    )
}

export default AddGamePage