import { Link } from "react-router-dom";

export const ArticleContent = ({title, imageURL, body, author, published, topic}) => {
    const formattedDate = new Date(published);
    const date = formattedDate.getDate();
    const month = formattedDate.getMonth();
    const year = formattedDate.getFullYear();
    return (
        <main>
        <article>
        <h1>{title}</h1>
        <img className="featured-image" src={imageURL} alt={title} />
        <p><span>By {author}</span> <span>Published on {date}/{month}/{year}</span></p>
        <Link to="#">{topic}</Link>
        <p>{body}</p>
        </article>
        </main>
    )
}