import ArticleContent from "./article-content.component"
import ArticleTitle from "./article-title.component"
import ImageReview from "../review/image-review.component"

interface ArticleWrapperProps {
    item: {
        content: string
        id: number
        type: string
        description: string
    }
}

const Article= ({item}: ArticleWrapperProps) => {
    return (
        <article key={item.id} className="contents">
            {item.type === 'HEADING' || item.type === 'PARAGRAPH' ?
            <div className="col-2 max-w-[800px]" key={item.id}>
                {item.type === 'HEADING' && <ArticleTitle title={item.content} />}
                {item.type === 'PARAGRAPH' && <ArticleContent text={item.content} />}
            </div>: <></>}
            {item.type === 'IMAGE' ? <ImageReview image={item.content} quote={item.description} key={item.id} /> : <></>}
        </article>
    )
}

export default Article