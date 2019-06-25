import React, { Component } from "react";
import { getArticleById } from "../api";
import CommentBar from "./CommentBar";
import styles from "../style/Article.module.css";

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
      <div className={styles.article}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>{article.body}</p>
        <CommentBar article={article} article_id={article.article_id} />
      </div>
    );
  }
}

export default Article;
