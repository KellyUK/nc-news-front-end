import React, { Component } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

class ArticlesByTopic extends Component {
  state = {
    articles: [],
    topic: "",
    article_id: null,
    isLoading: true
  };

  fetchArticles = () => {
    getAllArticles(this.props.topic).then(articles =>
      this.setState({
        articles: articles,
        isLoading: false,
        topic: this.props.topic
      })
    );
  };

  componentDidMount() {
    getAllArticles(this.props.topic).then(articles =>
      this.setState({
        articles: articles,
        isLoading: false,
        topic: this.props.topic
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      getAllArticles(this.props.topic).then(articles =>
        this.setState({
          articles: articles,
          isLoading: false,
          topic: this.props.topic
        })
      );
    }
  }

  render() {
    const { articles } = this.state;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
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
