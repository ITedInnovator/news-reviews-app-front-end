import { getAllArticles } from "../../api"
import { useState, useEffect } from "react"
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        getAllArticles().then(({data}) => {
            setArticles((currArticles) => {
                const articlesData = data.articles;
                setLoading(false);
            return [...currArticles], articlesData;
        })
        }

        )

        

    },[]);

    if(loading){
        return ( <p>...is Loading</p>)
    }

    if(error) return <ErrorComponent status={error.status} msg={error.msg} />

    return (
        <ul className="flex">
            {
                articles.map(({ title, article_id, article_img_url, topic }) => {
                    console.log(topic)
                  return (  
                    <ArticleCard key={article_id} className="card" title={title} imageUrl={article_img_url} topic={topic}/>
                        );
                    })
            }
        </ul>
    )
}