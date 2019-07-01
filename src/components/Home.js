import React, { Component } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import Error from "./Error";
import HomePageImages from "./HomePageImages";

class Home extends Component {
  state = {
    articles: [],
    article_id: null,
    isLoading: true,
    sort_by: "votes",
    loggedIn: "",
    err: false
  };

  handleSort = event => {
    const { value } = event.target;
    this.setState({ sort_by: value });
  };

  fetchArticles = () => {
    const { topic } = this.props;

    getAllArticles(topic)
      .then(articles =>
        this.setState({
          articles: articles,
          isLoading: false
        })
      )
      .catch(console.dir);
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
        .catch(err => {
          this.setState({ err: false });
        });
    }
  }

  render() {
    const { articles, isLoading, err } = this.state;
    return err ? (
      <Error err={err.response.data.message} />
    ) : isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <HomePageImages />
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

export default Home;
