export const Comment = ({votes, body, author }) => {
    return(
            <li className="card">
                <div className="comment-vote-count"> Votes: {votes}</div>
                <p>{author}</p>
                <p>{body}</p>
            </li>
    )
}