import { useState, useContext } from "react";
import { UserContext } from "../../main"
import { useParams } from "react-router-dom";
import { postNewComment } from "../../api";
import { ErrorComponent } from "../ErrorComponent";

export const CommentForm = ({setComments}) => {
    const {article_id} = useParams();
    const user = useContext(UserContext);

    const [ text, setText ] = useState("");
    const [ success, setSuccess ] = useState("");
    const [ error, setError ] = useState({});
    const [ textInputError, setTextInputError ] = useState("");
    const [ textInputSuccess, setTextInputSuccess ] = useState("");
    const [ isDisabled, setIsDisabled ] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        const newComment = { username: user, body: text}
        const comment = { author: user, body: text, created_at: new Date(), votes: 0}

        setComments((currComments) => {
                return [ ...currComments, comment];
            })

            setIsDisabled(true);

        postNewComment(article_id, newComment).then(() => {
            setIsDisabled(false);
        }).catch(err => {
                setError(err)
            })
    }

    function handleText(e){
        if( e.target.value.length <= 5){
            e.target.style.color = "red";
            setTextInputError("Must be at least 5 characters");
            setTextInputSuccess("");
            if(e.target.value.length === 0) setTextInputError("required")
        } else if (e.target.value.length > 5){
            e.target.style.color = "green";
            setTextInputError("");
            setTextInputSuccess("All good!");
        }
        setText(e.target.value);

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="comment-text">Comment <span className="error">*</span></label>
        <input id="comment-text" type="textarea" required onBlur={handleText} />
        <p className="error">{textInputError}</p>
        <p className="success">{textInputSuccess}</p>
        <button disabled={isDisabled} type="submit">Add new comment</button>
        </form>
        <p className="success">{success}</p>
        <ErrorComponent status={error.code} msg={Object.keys(error).length > 0 ? "Something went wrong please contact the website admin" : null} />
        
        </>
    )
}