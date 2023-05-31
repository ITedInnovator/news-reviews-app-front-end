import { CommentsContainer } from "../components/CommentsContainer"
import { ArticleList } from "../components/articles-components/ArticleList"

export const Articles = () => {
    return (
        <main id="main-content">
        <h1>Welcome To Our News Articles</h1>
        <CommentsContainer />
        <ArticleList/>
        </main>
    )
}