import RatingTableElement from "./rating-table-element.component"
import { Icon } from "@iconify/react/dist/iconify.js"

const RatingTable = () => {
    const pluses = [
        'Grafika nowej generacji. Japonia jest prześliczna',
        'Masa detali: deszcz i błoto, ślepia zwierząt etc',
        'Różnice w rozgrywce między Naoe oraz Yasuke',
        'Najlepsza walka z wszystkich nowych odsłon',
        'Postępy międzyplatformowe, świetnie to działa',
        'Można włączyć natychmiastowe skrytobójstwa',
        'Yasuke jest w porządku. Odświeża rozgrywkę'
    ]

    const minuses = [
        'Regres parkouru. Nie daje frajdy, mamy mniej opcji',
        'Japonia wcale nie jest taka idealna dla serii AC',
        'Piękny świat, ale brakuje w nim ciekawych NPC',
        'Brakuje filmowego, angażującego głównego wątku',
        'Powracają poziomy doświadczenia i statystyki',
        'Rozbudowa bazy bardziej nuży niż daje frajdę'
    ]
    return (
        <div className="flex justify-between my-8">
            <ul className="flex flex-col gap-4">
                {pluses.map((plus, index) => <RatingTableElement key={index} text={plus} icon="ic:round-plus" isPositive />)}
            </ul>
            <ul className="flex flex-col gap-4">
                {minuses.map((minus, index) => <RatingTableElement key={index} text={minus} icon="ic:round-minus" isPositive={false} />)}
            </ul>
        </div>
    ) 
}

export default RatingTable