import React, { Component } from "react";
import moment from "moment";
import { Link } from "@reach/router";
import Vote from "./Vote.js";

class CommentBar extends Component {
  state = { comments: "None" };
  render() {
    const { article, article_id, handleVote } = this.props;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
    const votes = article.votes;
    return (
      <section>
        <Vote article_id={article_id} votes={votes} handleVote={handleVote} />
        <Link to={`/article/${article_id}/comments`}>
          <p>Comments: {article.comment_count}</p>
          <p>Date: {formattedDate}</p>
        </Link>
      </section>
    );
  }
}

export default CommentBar;
