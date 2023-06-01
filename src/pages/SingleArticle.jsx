import { useEffect, useState } from "react"
import { ArticleContent } from "../components/article-components/ArticleContent"
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { ErrorComponent } from "../components/ErrorComponent";
import { CommentsContainer } from "../components/CommentsContainer";

export const SingleArticle = () => {
    const [ articleData, setArticleData ] = useState({});
    const { article_id } = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");
    
    useEffect( () => {
        getArticleById(article_id).then((article) => {
        setArticleData(( currArticle ) => {
            return article;
        })
        
        setLoading(false)
    })
    }, [])

        const {title, topic, author, body, created_at, article_img_url } = articleData;
    
    if(error){
        return ( <ErrorComponent status={error.status} message={error.message}/>)
    }
    if(loading){
        return ( <p>Loading...</p>);
    }

    return ( 
        <>
            <ArticleContent title={title} topic={topic} author={author} body={body} imageURL={article_img_url} published={created_at} />
            <CommentsContainer article_id={article_id} />
        </>
    )
}