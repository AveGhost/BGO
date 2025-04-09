export interface newsTypes {
    id: number
    title: string
    description: string
    teaser: string
    image: string
    href: string
    publishDate?: string
    score: number
    summaryContent: string
    author: {
        firstName: string
        avatar?: string
    }
}