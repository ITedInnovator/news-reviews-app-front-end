import { Link } from "react-router-dom";
import { formatDate } from "../../utils";

export const ArticleContent = ({title, imageURL, body, author, published, topic}) => {
    
    return (
        <main>
        <article>
        <h1>{title}</h1>
        <img className="featured-image" src={imageURL} alt={title} />
        <p><span>By {author}</span> <span>Published on {formatDate(published)}</span></p>
        <Link to="#">{topic}</Link>
        <p>{body}</p>
        </article>
        </main>
    )
}