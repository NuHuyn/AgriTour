import React, { useMemo, useState } from "react";
import NewsCard from "./NewsCard";
import './News.css';
import news_data from "../../assets/news_data";
const PAGE_SIZE = 6;
const News = () => {
  const [query, setQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // derive unique sources for filter dropdown
  const sources = useMemo(() => {
    const s = Array.from(new Set(news_data.map(n => n.source))).sort();
    return ["All", ...s];
  }, []);

  // filtered & searched data
  const filtered = news_data.filter((item) => {
    const q = query.trim().toLowerCase();
    const matchQuery =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q);
    const matchSource = sourceFilter === "All" || item.source === sourceFilter;
    return matchQuery && matchSource;
  });

  const visibleList = filtered.slice(0, visibleCount);

  return (
    <div className="news-page">
      <div className="news-banner">
        <div className="news-banner-inner">
          <h1>News on Agriculture & Farm Tourism</h1>
        </div>
      </div>

      <div className="news-controls">
        <div className="search-group">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search on title or source (Ex: Vietnam News, Agriculture.vn)..."
            className="news-search"
            aria-label="Search news"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label">Source:</label>
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="news-select"
          >
            {sources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="news-grid">
        {visibleList.length === 0 ? (
          <p className="no-result">News not exist</p>
        ) : (
          visibleList.map((item) => <NewsCard key={item.id} item={item} />)
        )}
      </div>

      <div className="news-footer">
        {visibleCount < filtered.length && (
          <button
            className="btn-load-more"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
          >
            Load more
          </button>
        )}

        {filtered.length > 0 && visibleCount >= filtered.length && filtered.length > PAGE_SIZE && (
          <button className="btn-reset" onClick={() => setVisibleCount(PAGE_SIZE)}>
            Collapse
          </button>
        )}
      </div>
    </div>
  )
}

export default News
