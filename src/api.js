import axios from "axios";

const instance = axios.create({
    baseURL: "https://news-reviews-app.onrender.com/api"
})

export const getAllArticles = (setArticles, setLoading) => {
    return instance.get("/articles").then(({data}) => {
            setArticles((currArticles) => {
                const articlesData = data.articles;
                setLoading(false);
            return [...currArticles], articlesData;
        })
        }

        )
}

export const getArticleComments = (article_id) => {
    return instance.get(`/articles/${article_id}/comments`).then(({data}) => {
        return data.comments;
    })
}