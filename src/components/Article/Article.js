import React, { Component } from "react";
import { getArticleById, patchArticleVotes } from "../../api";
import ArticleInformation from "./ArticleInformation";
import styles from "../../style/Article.module.css";
import Loading from "../Loading";
import User from "../User";
import CommentsList from "./CommentsList";
import Error from "../Error";
import moment from "moment";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: false,
    voteChange: 0
  };

  handleVote = voteChange => {
    const { article_id } = this.state.article;
    patchArticleVotes(article_id, { inc_votes: voteChange });
    this.setState(prevState => ({
      votes: prevState.article.votes + voteChange,
      voteChange: voteChange
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
    const { title, body, article_id } = article;
    return err ? (
      <Error err={err.response.data.message} />
    ) : isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div className={styles.article}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.body}>{body}</p>
        <User username={username} />
        <p className={styles.date}>{formattedDate}</p>
        <ArticleInformation
          article={article}
          article_id={article_id}
          handleVote={this.handleVote}
          votes={votes}
          voteChange={voteChange}
        />
        <CommentsList
          key={article_id}
          article_id={article_id}
          user={user}
          handleCommentVote={this.handleCommentVote}
          voteChange={voteChange}
        />
      </div>
    );
  }
}

export default Article;
