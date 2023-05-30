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