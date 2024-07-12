import React, { useState, useEffect } from "react";
import "./News.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import axios from "axios";
import Navigator from "./Navigator";

const { Meta } = Card;

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=ab6f0e0834e34b57adcd7f1db36da3fc"
      );
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="News">
      <Navigator />
      {news &&
        news.map((item, index) => {
          return (
            <div className="News_Main">
              <Card
                className="news_card"
                key={index}
                hoverable
                // style={
                //   ({ alignContent: "center" }, { Width: 100 }, { padding: 50 })
                // }
                cover={<img alt="image" src={item.urlToImage} />}
              >
                <Meta title={item.title} description={item.content} />
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <button type="primary" style={{ marginTop: "10px" }}>
                    Read more
                  </button>
                </a>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default News;
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=939575b2b88749f68b55b0075dccd5ff
// 939575b2b88749f68b55b0075dccd5ff
