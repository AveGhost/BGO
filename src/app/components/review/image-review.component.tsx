import Image from "next/image"

interface ImageReviewProps {
    image: string
    quote?: string
}

const ImageReview = ({image,quote}: ImageReviewProps) => {
    return (
        <div className="grid grid-cols-[180px_1fr] py-6 col-span-2">
            <span className="text-[12px] pr-3 text-zinc-300 place-content-end">{quote}</span>
            <div className="w-[720px] h-[400px] relative">
                <Image
                    src={image}
                    alt="review"
                    fill
                    className="rounded-lg object-cover"
                />
            </div>
        </div>
    )
}

export default ImageReview