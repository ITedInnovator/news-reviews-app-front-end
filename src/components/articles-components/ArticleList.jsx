import { getAllArticles } from "../../api"
import { useState, useEffect } from "react"
import { ArticleCard } from "./ArticleCard";
import { ErrorComponent } from "../ErrorComponent";

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        getAllArticles(setArticles, setLoading).catch( err => {
            setError(err);
        })

        

    },[]);

    if(loading){
        return ( <p>...is Loading</p>)
    } else if(error) return (<ErrorComponent status={error.status} msg={error.msg} />)

    return (
        <ul className="flex">
            {
                articles.map(({ title, article_id, article_img_url, topic }) => {
                  return (  
                    <ArticleCard key={article_id} article_id={article_id} className="card" title={title} imageUrl={article_img_url} topic={topic}/>
                        );
                    })
            }
        </ul>
    )
}