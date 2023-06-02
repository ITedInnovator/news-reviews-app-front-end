import { Link } from "react-router-dom";

export const ArticleCard = ({article_id, title, imageUrl, topic, created_at}) => {
    return (
        <li className="card">
            <h2><Link to={`/articles/${article_id}`}>{title}</Link></h2>
            <img width="250px" src={imageUrl} alt={title} />
            <p>{created_at}</p>
            <p>{topic}</p>
        </li>
    );
}