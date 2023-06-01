import { useEffect, useState } from "react"
import { ArticleContent } from "../components/article-components/ArticleContent"
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { ErrorComponent } from "../components/ErrorComponent";
import { CommentsContainer } from "../components/CommentsContainer";
import { VoteArea } from "../components/article-components/VoteArea";

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
    
    if(error){
        return ( <ErrorComponent status={error.status} message={error.message}/>)
    }
    if(loading){
        return ( <p>Loading...</p>);
    }

    return ( 
        <>
            <VoteArea articleData={articleData} setArticleData={setArticleData}/>
            <ArticleContent articleData={articleData} />
            <CommentsContainer article_id={article_id} />
        </>
    )
}