import Image from "next/image"
import AuthorCard from "../author/author-card.component"
import Link from "next/link"
import Rating from "./rating.component"
import Category from "./category.component"

interface ReviewCardProps {
   rate: number
   image: string
   category: string
   title: string
   description: string
   href?: string
   author: {
    name: string,
    avatar?: string,
    date?: string
   }
   isGrid: boolean
}

const ReviewCard = ({rate, image, category, title, description, href, author, isGrid}: ReviewCardProps) => {
    return (
        isGrid ?
        <article className="flex flex-col h-full relative border-1 border-zinc-600 rounded-lg group transition-all duration-300">
            <Rating rate={rate} classes="absolute -top-6 right-0 left-0" />
            <Link href={href ? href : title} className="relative rounded-t-lg overflow-hidden after:bg-gradient-to-b after:from-zinc-800 after:to-transparent after:absolute after:inset-0 after:z-0 after:rounded-t-lg">
                <Image
                    src={image}
                    alt="review"
                    width={360}
                    height={360}
                    className="rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
            </Link>
            <div className="flex flex-col gap-4 p-4">
                <Category category={category} />
                <h2 className="text-xl font-medium"><Link href={href ? href : title}>{title}</Link></h2>
                <p className="text-zinc-300 font-light">{description}</p>
            </div>
            <AuthorCard avatar={author.avatar} name={author.name} date={author.date} />
        </article>
        : <article className="grid grid-cols-[600px_1fr] h-full relative border-1 border-zinc-600 rounded-lg group transition-all duration-300">
            <Rating rate={rate} classes="absolute -top-6 -left-5" />
            <Link href={href ? href : title} className="relative rounded-tl-lg rounded-bl-lg overflow-hidden h-full">
                <Image
                    src={image}
                    alt="review"
                    width={600}
                    height={600}
                    className="rounded-tl-lg rounded-bl-lg transition-transform duration-300 group-hover:scale-110"
                />
            </Link>
            <div className="flex flex-col">
                <div className="flex flex-col gap-4 p-4">
                    <Category category={category} />
                    <h2 className="text-xl font-medium"><Link href={href ? href : title}>{title}</Link></h2>
                    <p className="text-zinc-300 font-light">{description}</p>
                </div>
                <AuthorCard avatar={author.avatar} name={author.name} date={author.date} />
            </div>
        </article>
    )
}

export default ReviewCard