import React, { Component } from "react";
import { getArticleById } from "../api";
import moment from "moment";

class Article extends Component {
  state = { article: {}, loading: true };

  componentDidMount() {
    getArticleById(this.props.article_id).then(article => {
      this.setState({ article: article });
    });
  }
  render() {
    const { article } = this.state;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
    return (
      <div>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <section>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comments}</p>
          <p>Date: {formattedDate}</p>
        </section>
      </div>
    );
  }
}

export default Article;
