import Image from "next/image"
import AuthorCard from "../author/author-card.component"

interface ReviewCardProps {
   rate: number
   image: string
   category: string
   title: string
   description: string
   href: string
   author: {
       name: string,
       avatar?: string,
       date?: string
    }
}

const ratingClass = (rating: number) => {
    if(rating >= 8) {
        return "border-green-700 from-green-700 from-0% to-100%"
    } else if(rating <= 7 && rating >= 4) {
        return "border-orange-400 from-orange-400 from-0% to-50%"
    } else {
        return "border-red-600 from-red-600 from-0% to-30%"
    }
}

const ReviewCard = ({rate, image, category, title, description, href, author}: ReviewCardProps) => {
    return (
        <article className="flex flex-col h-full relative border-1 border-zinc-600 rounded-lg group transition-all duration-300">
            <span className={`absolute -top-6 right-0 left-0 mx-auto text-center rounded-full w-12 h-12 flex justify-center items-center border-1 bg-gradient-to-t ${ratingClass(rate)} to-zinc-200 text-zinc-900 z-10`}>{rate}/10</span>
            <a href={href} className="relative rounded-lg overflow-hidden after:bg-gradient-to-b after:from-zinc-800 after:to-transparent after:absolute after:inset-0 after:z-0 after:rounded-lg">
                <Image
                    src={image}
                    alt="review"
                    width={360}
                    height={360}
                    className="rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
            </a>
            <div className="flex flex-col gap-4 p-4">
                <span className="text-sm">{category}</span>
                <h2 className="text-xl font-medium"><a href={href}>{title}</a></h2>
                <p className="text-zinc-300 font-light">{description}</p>
            </div>
            <AuthorCard avatar={author.avatar} name={author.name} date={author.date} />
        </article>
    )
}

export default ReviewCard