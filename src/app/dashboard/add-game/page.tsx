import AddGame from "@/components/add-post/add-game.component"
import Steps from "@/components/article/steps.component"
import GameListWrapper from "@/components/article/game-list-wrapper.component"
const AddGamePage = () => {
    return (
        <div className="container mx-auto h-full grid place-items-center items-center grow relative">
            <GameListWrapper />
            <div className="flex flex-col">
                <Steps />
                <span className="text-sm text-rose-600 font-medium mb-4 text-center">* Przed dodaniem gry upewnij się, że owa gra nie jest już dodana.</span>
                <div className="form w-full min-h-[350px] p-4">
                    <div className="flex flex-col gap-4 justify-center items-center h-full">
                        <h1 className="text-2xl text-center mb-6">Dodaj recenzowaną grę</h1>
                        <AddGame />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddGamePage