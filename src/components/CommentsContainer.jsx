import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { Comment } from "./Comment";

export const CommentsContainer = ({article_id}) => {

const [comments, setComments ] = useState([])


useEffect(() => {
    getArticleComments(article_id).then((comments) => {
        setComments(comments)
    })
}, [])

return(
    <>
    <h2>{comments.length} Comments</h2>
    <ul>
    { comments ? comments.map(({comment_id, body, author, created_at, votes }) => {
        return (
            <Comment key={comment_id} body={body} author={author} created_at={created_at} votes={votes}/>

        )
    }) : null}
    </ul>
    </>
)

    
}