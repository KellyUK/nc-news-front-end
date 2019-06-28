import React, { Component } from "react";
import { getArticleById } from "../api";
import ArticleInformation from "./ArticleInformation";
import styles from "../style/Article.module.css";
import Loading from "./Loading";
import User from "./User";
import CommentsList from "./CommentsList";
import { patchArticleVotes } from "../api";

class Article extends Component {
  state = { article: {}, isLoading: true, voteChange: 0 };

  handleVote = voteChange => {
    const { article_id } = this.state.article;
    patchArticleVotes(article_id, { inc_votes: voteChange });
    this.setState(prevState => ({
      voteChange: prevState.article.votes + voteChange,
      article: {
        ...prevState.article,
        votes: prevState.article.votes + voteChange
      }
    }));
  };

  componentDidMount() {
    const { article_id } = this.props;
    getArticleById(article_id).then(article => {
      this.setState({
        article: article,
        isLoading: false,
        votes: article.votes
      });
    });
  }

  render() {
    const { article, voteChange, votes } = this.state;
    const username = article.author;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div className={styles.article}>
        <User username={username} />
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p>{article.body}</p>
        <ArticleInformation
          handleVote={this.handleVote}
          article={article}
          article_id={article.article_id}
          votes={votes + voteChange}
          voteChange={voteChange}
        />
        <CommentsList
          key={article.article_id}
          article_id={article.article_id}
        />
      </div>
    );
  }
}

export default Article;
