import { useEffect, useState } from "react"
import { ArticleContent } from "../components/article-components/ArticleContent"
import { useParams } from "react-router-dom";

export const SingleArticle = () => {
    const [ articleData, setArticleData ] = useState({});
    const { article_id } = useParams()
    useEffect( () => {
        
    }, [])

    console.log(article_id)
    return ( 
            <ArticleContent articleData={articleData} />
    )
}