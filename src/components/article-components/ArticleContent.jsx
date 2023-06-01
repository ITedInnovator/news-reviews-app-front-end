import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

export const ArticleContent = ({articleData}) => {
    const {title, topic, author, body, created_at, article_img_url } = articleData;
    return (
        <main>
        <article>
        <h1>{title}</h1>
        <img className="featured-image" src={article_img_url} alt={title} />
        <p><span>By {author}</span> <span>Published on {formatDate(created_at)}</span></p>
        <Link to="#">{topic}</Link>
        <p>{body}</p>
        </article>
        </main>
    )
}