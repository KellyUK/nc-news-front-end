import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../api";

class AllArticles extends Component {
  state = {
    loaded: false,
    allArticles: []
  };

  componentDidMount() {
    getAllArticles().then(articles =>
      this.setState({ allArticles: articles, isLoading: false })
    );
  }

  render() {
    return (
      <div>
        <p>all articles</p>
        {this.state.allArticles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    );
  }
}

export default AllArticles;
