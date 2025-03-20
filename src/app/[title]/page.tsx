import Image from "next/image"
import ImageReview from "../components/review/image-review.component"
import SummaryCard from "../components/review/summary-card.component"
import AuthorCard from "../components/author/author-card.component"
import RatingTable from "../components/review/rating-table.component"

const SinglePage = () => {
    return (
        <section className="container max-w-[1200px] mx-auto py-6">
            <h1 className="text-5xl mb-2">Assasins Creed Shadows - Ubisoft popierdoliło</h1>
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-zinc-400">Opublikowano: <strong>07.11.2024</strong></span>
                <span className="text-zinc-400">Autor: <strong>AveGhost</strong></span>
            </div>
            <Image
                src="/placeholder-image.webp"
                alt="placeholder"
                width={1200}
                height={1000}
                className="rounded-lg mx-auto my-4"
            />
            <p className="mb-4">Mam specjalną umiejętność, z gatunku niechcianych i nieprzydatnych. Jedną recenzją potrafię bowiem rozczarować zarówno hejterów trzymających kciuki za porażkę Shadows, jak również fanów Assassin’s Creed liczących na nowy, wspaniały rozdział serii. Nowa gra nie spełni oczekiwań żadnej z tych zwaśnionych grup.</p>
            <p className="mb-4">Shadows jest zbyt dobre aby doprowadzić do upadku i bankructwa Ubisoftu. Jednocześnie jest odtwórcze oraz ułomne narracyjnie, przez co nie dorównuje uwielbianym odsłonom takim jak Black Flag, AC2 czy nawet Origins. Ubisoft podnosi poprzeczkę w obszarze grafiki oraz dbałości o detale, ale pozostałe elementy gry utknęły w miejscu. A jak coś stoi w miejscu, to się cofa.</p>
            <h2 className="text-2xl mb-4 pb-4 font-medium border-b-1 border-zinc-600">Szok: Japonia wcale nie jest tak świetnym miejscem akcji dla Assassin’s Creed, jak się nam wszystkim wydawało.</h2>
            <p className="mb-4">Fani serii – ze mną włącznie – od dekad dopominali się o asasyna w Japonii. Na papierze brzmi to świetne: samuraje, ninja, katany, ostrza, honor i kodeks. No po prostu samograj, duet idealny. Jednak w praktyce Japonia XVI wieku mocno gryzie się z filarem serii Assassin’s Creed, jakim jest dynamiczny parkour z wykorzystaniem zróżnicowanego środowiska.</p>
            <p className="mb-4">Jeśli spojrzycie na typową japońska aglomerację z tego okresu, zdacie sobie sprawę, że jest niemal całkowicie płaska. Większość budynków to parterowe chaty. Do tego stawiane w określonym porządku, wzdłuż dróg, tworząc regularną siatkę. Parkour w takich warunkach okazuje się… potwornie nudny! Niskie i bliźniacze domy, regularna zabudowa, równe odstępy. Zdecydowanie nie jest to Rzym ani Paryż, z jego labiryntem uliczek oraz galerią budynków z przekroju epok.</p>
            <ImageReview image="/placeholder-image.webp" quote="Zdecydowanie nie jest to Rzym ani Paryż. Japonia jest płaska, parkour się tu nie klei" />
            <ImageReview image="/placeholder-image.webp" quote="Zdecydowanie nie jest to Rzym ani Paryż. Japonia jest płaska, parkour się tu nie klei" />
            <p>Jedyne wysokie obiekty XVI-wiecznej japońskiej aglomeracji to świątynie oraz zamki. Tutaj jednak daje o sobie znać azjatyckie zamiłowanie do porządku oraz zasad. Każda warownia wygląda jak klon poprzedniej, ich mury oraz wieże są do siebie bliźniaczo podobne. Zdobywając jeden zamek to trochę tak, jakbyś zdobył je wszystkie. Ubisoft, trzymając się realizmu historycznego, zabił połowę frajdy z parkouru.</p>
            <p>Po prostu nie ma na co się wspinać. Większość czasu spędzicie w siodle, galopując od wioski do wioski. Około jedna trzecia wszystkich punktów widokowych to drzewo na szczycie wzniesienia, co samo w sobie jest wymowne, zwłaszcza w kontekście takich odsłon jak Unity czy Syndicate. Nawet Odyssey, krytykowane za niską i powtarzalną zabudowę, wydaje się na tle Shadows zróżnicowane środowiskowo.</p>
            <SummaryCard rate={10} />
            <RatingTable />
            <div className="bg-zinc-800 rounded-lg">
                <AuthorCard avatar="/avatar.png" name="AveGhost" role="Redaktor" description="Specjalista od Groznawstwa, który nie stroni od swoich ulubionych tytułów. Rzadko się do tego przyznaje, ale ma prawie 2000 godzin na liczniku w Path of Exile. Pozostałe dwa tytuły w jego świętej trójcy to Assassin’s Creed: Origins oraz Final Fantasy XV. Miłośnik RPG i hack’n’slash, dla którego najważniejsza jest dobra historia, a ściany tekstu są plusem. Po godzinach pisze do szuflady, pije niepokojąco duże ilości kawy i często wraca do swoich ulubionych seriali (o Hannibalu prawdopodobnie gadałby nawet w trumnie)."/>
            </div>
        </section>
    )
}

export default SinglePage