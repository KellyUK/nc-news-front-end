import React, { Component } from "react";
import { getArticleById } from "../api";
import ArticleInformation from "./ArticleInformation";
import styles from "../style/Article.module.css";
import Loading from "./Loading";
import User from "./User";
import CommentsList from "./CommentsList";
import { patchArticleVotes } from "../api";
import Error from "./Error";
import moment from "moment";

class Article extends Component {
  state = { article: {}, isLoading: true, err: false, voteChange: 0 };
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
    getArticleById(article_id)
      .then(article => {
        this.setState({
          article: article,
          isLoading: false,
          votes: article.votes
        });
      })
      .catch(err => {
        this.setState({ err });
      });
  }

  render() {
    const { article, voteChange, votes, err, isLoading } = this.state;
    const { user } = this.props;
    const username = article.author;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("MMM Do YYYY");
    return err ? (
      <Error err={err.response.data.message} />
    ) : isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div className={styles.article}>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        <p className={styles.body}>{article.body}</p>
        <User username={username} />
        <p>{formattedDate}</p>
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
          user={user}
        />
      </div>
    );
  }
}

export default Article;
