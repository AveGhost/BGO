const Rating = ({rate, classes}: {rate: number, classes?: string}) => {
    const ratingClass = (rating: number) => {
        if(rating >= 8) {
            return "border-green-700 from-green-700 from-0% to-100%"
        } else if(rating <= 7 && rating >= 4) {
            return "border-orange-400 from-orange-400 from-0% to-50%"
        } else {
            return "border-red-600 from-red-600 from-0% to-30%"
        }
    }

    return (
        <span className={`mx-auto text-center rounded-full w-12 h-12 flex justify-center items-center border-1 bg-gradient-to-t ${ratingClass(rate)} to-zinc-200 text-zinc-900 z-10 ${classes}`}>{rate}/10</span>
    )
}

export default Rating