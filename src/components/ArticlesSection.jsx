import React from 'react';
import './ArticlesSection.css';

function ArticlesSection() {
  return (
    <section className="articles">
      <h2>Our Collections</h2>
      <div className="articles-grid">
        <div className="article-card">Summer Collection</div>
        <div className="article-card">Ramadan Collection</div>
        <div className="article-card">Mother’s Day Gifts</div>
        <div className="article-card">Handmade Specials</div>
      </div>
    </section>
  );
}

export default ArticlesSection;
