import React, { useState, useEffect } from "react";
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.currentsapi.services/v1/latest-news?apiKey=2TIRGcB2GZDlEjUVthEoLPcQakkKI4t7uCAdwWj8DJW9SKpA')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const processedNews = data.news.map(article => ({
                    title: article.title,
                    image: article.image,
                    description: article.description,
                    url: article.url
                }));
                setNews(processedNews);
                setIsLoading(false);
            })
    }, []);


    return (
        <div className="news-container">
            {news.map((article, index) => (
                <div className="news-item" key={index}>

                    <div className="news-content">
                        <h2><u><b>{article.title}</b></u></h2>
                        <div>
                            <img src={article.image} alt={article.title} />
                        </div>
                        <p>{article.description}</p>
                        <span><a href={article.url} target="_blank" rel="noopener noreferrer">{article.url}</a></span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default News;


