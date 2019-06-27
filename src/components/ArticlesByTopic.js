import React, { Component } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import SortArticles from "./SortArticles";

class ArticlesByTopic extends Component {
  state = {
    articles: [],
    article_id: null,
    isLoading: true,
    sort_by: "",
    loggedIn: ""
  };

  handleSort = event => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  fetchArticles = () => {
    const { topic } = this.props;
    getAllArticles(topic).then(articles =>
      this.setState({
        articles: articles,
        isLoading: false
      })
    );
  };

  componentDidMount() {
    const { topic } = this.props;
    getAllArticles(topic).then(articles =>
      this.setState({
        articles: articles,
        isLoading: false
      })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort_by } = this.state;
    if (prevProps.topic !== topic || prevState.sort_by !== sort_by) {
      getAllArticles(topic, sort_by)
        .then(articles =>
          this.setState({
            articles: articles,
            isLoading: false
          })
        )
        .catch(console.dir);
    }
  }

  render() {
    const { articles } = this.state;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <SortArticles handleSort={this.handleSort} />
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
