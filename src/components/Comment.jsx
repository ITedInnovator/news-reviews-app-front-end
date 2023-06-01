import { formatDate } from "../utils"

export const Comment = ({votes, body, author, created_at }) => {
    console.log(created_at)
    return(
            <li className="card">
                <div className="comment-vote-count"> Votes: {votes}</div>
                <p>{author}</p>
                <p>{formatDate(created_at, true)}</p>
                <p>{body}</p>
            </li>
    )
}