export const ArticleCard = ({title, imageUrl, topic}) => {
    return (
        <li className="card">
             <h2>{title}</h2>
            <img width="250px" src={imageUrl} />
            <p>{topic}</p>
        </li>
    );
}