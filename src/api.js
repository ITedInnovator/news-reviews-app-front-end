import axios from "axios";

const instance = axios.create({
    baseURL: "https://news-reviews-app.onrender.com/api"
})

export const getAllArticles = () => {
    return instance.get("/articles").then(({data}) => {
            
            const articlesData = data.articles;
            return articlesData;
    })
}

export const getArticleComments = (article_id) => {
    return instance.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments;
    });
}
export  const getArticleById = ( article_id) => {
    return instance.get(`/articles/${article_id}`).then(({data}) => {
        
            const articleData = data.article;
            return articleData;
    })
}

export const updateArticleVotes = (article_id, increment) => {
    return instance.patch(`/articles/${article_id}`,{inc_votes: increment});
}