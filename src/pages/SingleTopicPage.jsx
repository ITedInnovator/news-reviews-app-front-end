import { useEffect, useState } from "react"
import { getAllArticles, getTopics } from "../api"
import { useParams } from "react-router-dom"
import { ArticleCard } from "../components/articles-components/ArticleCard";
import { formatDate } from "../utils";

export const SingleTopicPage = () => {
    const {slug} = useParams();
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    useEffect(() => {
        getAllArticles().then(articles => {
            const filteredArticles = articles.filter(article => article.topic === slug);
            setArticles(filteredArticles);
        })
    },[slug])
    return(
        <main id="main-content">
        <h1>This is a list of articles about {topics.filter(topic => topic.slug === slug).map((topic) => topic.description)}</h1>
        <ul className="flex">
            {articles.map(({ title, article_id, article_img_url, topic, created_at }) => <ArticleCard key={article_id} article_id={article_id} className="card" title={title} imageUrl={article_img_url} topic={topic} created_at={formatDate(created_at)} />)}
        </ul>
        </main>
    )
}