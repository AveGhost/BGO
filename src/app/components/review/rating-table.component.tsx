import RatingTableElement from "./rating-table-element.component"

const RatingTable = ({pluses, minuses}: {pluses: string[] | string, minuses: string[]| string}) => {
    const plusesArray = typeof pluses === "string" ? pluses.split(",") : pluses;
    const minusesArray = typeof minuses === "string" ? minuses.split(",") : minuses;

    return (
        <div className="flex justify-between my-8">
            <ul className="flex flex-col gap-4">
                {plusesArray.map((plus, index) => <RatingTableElement key={index} text={plus} icon="ic:round-plus" isPositive />)}
            </ul>
            <ul className="flex flex-col gap-4">
                {minusesArray.map((minus, index) => <RatingTableElement key={index} text={minus} icon="ic:round-minus" isPositive={false} />)}
            </ul>
        </div>
    ) 
}

export default RatingTable