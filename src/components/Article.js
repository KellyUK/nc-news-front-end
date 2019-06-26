import React, { Component } from "react";
import { getArticleById } from "../api";
import CommentBar from "./CommentBar";
import styles from "../style/Article.module.css";
import Loading from "./Loading";

class Article extends Component {
  state = { article: {}, loading: true, author: "" };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article: article, loading: false });
    });
  }
  render() {
    const { article } = this.state;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div className={styles.article}>
        <p>{article.author}</p>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>{article.body}</p>
        <CommentBar article={article} article_id={article.article_id} />
      </div>
    );
  }
}

export default Article;
