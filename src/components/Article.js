import React, { Component } from "react";
import { getArticleById, getUserByUsername } from "../api";
import CommentBar from "./CommentBar";
import styles from "../style/Article.module.css";
import Loading from "./Loading";
import User from "./User";

class Article extends Component {
  state = { article: {}, loading: true };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({
        article: article,
        loading: false
      });
    });
  }

  render() {
    const { article } = this.state;
    const username = article.author;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div className={styles.article}>
        <User username={username} />
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>{article.body}</p>
        <CommentBar article={article} article_id={article.article_id} />
      </div>
    );
  }
}

export default Article;
