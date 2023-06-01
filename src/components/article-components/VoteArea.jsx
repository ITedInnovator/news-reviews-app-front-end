import { useState } from "react";
import { VoteButton } from "./VoteButton"
import { updateArticleVotes } from "../../api";
import { ErrorComponent } from "../ErrorComponent";

export const VoteArea = ({setArticleData, articleData}) => {
    const [ error, setError ] = useState("");

    function upVote(){
        setArticleData((currArticleData) => {
               return {...currArticleData, votes: currArticleData.votes + 1};
            });

        updateArticleVotes(articleData.article_id, 1).catch(err => {
            setArticleData((currArticleData) => {
                return {...currArticleData, votes: currArticleData.votes - 1};
            })
            setError(err);
        })
    }

    function downVote(){

        updateArticleVotes(articleData.article_id, -1).catch(err => {
            setError(err);
        })

    }

    console.log(error)

    if(error) {
        return ( 
        <ErrorComponent status={error.code} msg="Unfortunately we are unable to change your vote at this time. Please try again later..." />
        )
    }


    return (
        <div>
            <VoteButton action="+" setArticleData={setArticleData} articleData={articleData} increment={1} callback={upVote} />
            <p>Votes {articleData.votes}</p>
            <VoteButton action="-" setArticleData={setArticleData} articleData={articleData} increment={-1} callback={downVote} />
        </div>
    )
}