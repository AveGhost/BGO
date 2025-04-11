interface SetRatingProps {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
    classes?: string
}

const SetRating = ({score, setScore, classes}: SetRatingProps) => {
    const ratingClass = (rating: number) => {
        if(rating >= 8) {
            return "border-green-700 from-green-700/40 from-0% to-100% text-green-500"
        } else if(rating <= 7 && rating >= 4) {
            return "border-orange-600 from-orange-600/40 from-0% to-100% text-orange-500"
        } else {
            return "border-red-500 from-red-500/40 from-0% to-100% text-red-500"
        }
    }

    const handleScore = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if(value <= 10 && value >= 0) {
            setScore(Number(value))
        }
    }

    return (
        <input type="number" placeholder={score.toString()} min={0} max={10} name="score" value={score} onChange={handleScore} className={`mx-auto text-center rounded-full w-12 h-12 flex justify-center items-center border-1 bg-gradient-form-br bg-gradient-to-tl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${ratingClass(score)} to-zinc-800 font-medium z-10 ${classes}`} />
    )
}

export default SetRating