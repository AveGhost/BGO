import SummaryCard from "../../components/review/summary-card.component"
import AuthorCard from "../../components/author/author-card.component"
import RatingTable from "../../components/review/rating-table.component"
import getNews from "@/app/utils/news/GetNews"
import Hero from "@/app/components/article/hero.component"
import Article from "@/app/components/article/article-wrapper.component"

interface ArticleItemProps {
    content: string
    id: number
    type: string
    description: string
}

const SinglePage = async ({params}: {params: {id: number}}) => {
    const { id } = await params
    const news = await getNews({id: id})
    const title = news.title
    const thumbnail = news.thumbnail
    const summaryTitle = news.summaryTitle
    const summaryContent = news.summaryContent
    const score = news.score
    const publishDate = news.publishDate
    const plusList = news.plusList
    const minusList = news.minusList
    const author = news.author
    const content = news.content
    const gameTitle = news.game.title
    console.log(author)
    return (
        <section className="py-6 container mx-auto">
            <Hero title={title} publishDate={publishDate} author={author} image={thumbnail} />
            <div className="grid grid-cols-[180px_1fr]">
                {content.map((item: ArticleItemProps) => {
                    return <Article key={item.id} item={item} />
                })}
                <div className="col-2 max-w-[800px]">
                    <SummaryCard rate={score} gameTitle={gameTitle} summaryContent={summaryContent} summaryTitle={summaryTitle} />
                    <RatingTable pluses={plusList} minuses={minusList} />
                    <div className="bg-zinc-800 rounded-lg">
                        <AuthorCard classes="grid grid-cols-[auto_1fr]" avatar="/avatar.png" name={author.firstName} role={author.userRole} description="Specjalista od Groznawstwa, który nie stroni od swoich ulubionych tytułów. Rzadko się do tego przyznaje, ale ma prawie 2000 godzin na liczniku w Path of Exile. Pozostałe dwa tytuły w jego świętej trójcy to Assassin’s Creed: Origins oraz Final Fantasy XV. Miłośnik RPG i hack’n’slash, dla którego najważniejsza jest dobra historia, a ściany tekstu są plusem. Po godzinach pisze do szuflady, pije niepokojąco duże ilości kawy i często wraca do swoich ulubionych seriali (o Hannibalu prawdopodobnie gadałby nawet w trumnie)."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePage