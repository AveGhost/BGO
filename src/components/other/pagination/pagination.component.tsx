import PaginationElement from "./pagination-element.component"

const Pagination = ({pagesNumber,currentPage}: {pagesNumber: number,currentPage?: number}) => {
    return (
        <ul className="flex gap-4 justify-center items-center py-6">
            {Array.from({ length: pagesNumber }, (_, index) => (
                <PaginationElement
                    key={index}
                    page={index + 1}
                    isActive={Number(currentPage) === index + 1}
                />
            ))}
        </ul>
    )
}

export default Pagination