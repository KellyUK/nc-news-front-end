import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import { getAllArticles } from "../api";
import Loading from "./Loading";

class AllArticles extends Component {
  state = {
    isLoading: true,
    allArticles: []
  };

  componentDidMount() {
    getAllArticles().then(articles =>
      this.setState({ allArticles: articles, isLoading: false })
    );
  }

  render() {
    return this.state.isloading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <section>
        {this.state.allArticles.map(article => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </section>
    );
  }
}

export default AllArticles;
