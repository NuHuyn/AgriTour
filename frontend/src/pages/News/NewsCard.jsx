import React from "react";
import "./NewsCard.css";
const NewsCard = ({ item }) => {
  return (
    <a
      className="news-card"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.title}
    >
      <div className="news-card-imgwrap">
        <img src={item.img} alt={item.title} loading="lazy" />
      </div>

      <div className="news-card-body">
        <p className="news-card-source">{item.source}</p>
        <h3 className="news-card-title">{item.title}</h3>
        <div className="news-card-meta">
          <span className="news-card-date">{item.date}</span>
        </div>
      </div>
    </a>
  )
}

export default NewsCard
