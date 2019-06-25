import React, { Component } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";

class ArticlesByTopic extends Component {
  state = {
    articles: [],
    topic: "",
    article_id: null
  };

  componentDidMount() {
    getAllArticles().then(articles =>
      this.setState({
        articles: articles,
        isLoading: false,
        topic: this.props.topic
      })
    );
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => (
          <ArticleCard
            key={article.article_id}
            article={article}
            article_id={article.article_id}
          />
        ))}
      </div>
    );
  }
}

export default ArticlesByTopic;
