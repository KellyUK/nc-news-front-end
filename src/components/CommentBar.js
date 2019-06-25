import React, { Component } from "react";
import moment from "moment";
import { Link } from "@reach/router";

class CommentBar extends Component {
  state = { comments: "None", Votes: 0, article_id: this.article_id };
  render() {
    const { article } = this.props;
    const rawDate = article.created_at;
    const formattedDate = moment(rawDate).format("YYYY MM DD");
    return (
      <section>
        <button>Votes: {article.votes}</button>
        {/* <Link to={} */}
        <p>Comments: {article.comment_count}</p>
        <p>Date: {formattedDate}</p>
      </section>
    );
  }
}

export default CommentBar;
