import { useState } from "react"
import { updateArticleVotes } from "../../api"
import { ErrorComponent } from "../ErrorComponent"

export const VoteButton = ({increment, action, callback, articleData, setArticleData}) => {

    return (
        <button onClick={callback}>{action}</button>
    )
}