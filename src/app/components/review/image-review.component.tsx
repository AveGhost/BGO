import Image from "next/image"

interface ImageReviewProps {
    image: string
    quote?: string
}

const ImageReview = ({image,quote}: ImageReviewProps) => {
    return (
        <div className="grid grid-cols-[180px_1fr] py-6 col-span-2">
            <span className="text-[12px] pr-3 text-zinc-300 place-content-end">{quote}</span>
            <Image
                src={image}
                alt="review"
                width={760}
                height={480}
                className="rounded-lg"
            />
        </div>
    )
}

export default ImageReview