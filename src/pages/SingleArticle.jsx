import { useEffect, useState } from "react"
import { ArticleContent } from "../components/article-components/ArticleContent"
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { ErrorComponent } from "../components/ErrorComponent";

export const SingleArticle = () => {
    const [ articleData, setArticleData ] = useState({});
    const { article_id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");
    
    useEffect( () => {
        getArticleById(setArticleData, setLoading, article_id).catch(err => {
            setError(err);
        })
    }, [])

        const {title, topic, author, body, created_at, article_img_url } = articleData;
    
    if(error){
        return ( <ErrorComponent status={error.status} message={error.message}/>)
    } 

    return ( 
            <ArticleContent title={title} topic={topic} author={author} body={body} imageURL={article_img_url} published={created_at} />
    )
}