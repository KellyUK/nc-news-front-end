import * as React from "react";

export const ArticleCard = ({ article_id, article }) => {
  return (
    <div>
      <h2 className="articleTitle">{article.title}</h2>
      <h3>Written by: {article.author}</h3>
      <h3>Topic: {article.topic}</h3>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comments}</p>
      <p>Date: {article.created_at}</p>
    </div>
  );
};

export default ArticleCard;
