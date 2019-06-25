import React, { Component } from "react";
import { getArticleById } from "../api";
import CommentBar from "./CommentBar";

class Article extends Component {
  state = { article: {}, loading: true };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article: article });
    });
  }
  render() {
    const { article } = this.state;
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <CommentBar article={article} article_id={article.article_id} />
      </div>
    );
  }
}

export default Article;
