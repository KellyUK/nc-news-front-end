import styles from "../style/CommentCard.module.css";
import moment from "moment";
import Vote from "./Vote";
import React, { Component } from "react";
import { patchCommentVotes } from "../api";

class CommentCard extends Component {
  state = { votes: 0, voteChange: 0 };

  componentDidMount() {
    const { comment } = this.props;
    this.setState({ votes: comment.votes, comment_id: comment.comment_id });
  }

  handleCommentVote = voteChange => {
    const { comment_id } = this.state;
    patchCommentVotes(comment_id, { inc_votes: voteChange });
    this.setState(prevState => ({
      votes: prevState.votes + voteChange,
      voteChange: voteChange
    }));
  };

  render() {
    const { comment, deleteComment, comment_id, user } = this.props;
    const rawDate = comment.created_at;
    const formattedDate = moment(rawDate).format("Do MMM YYYY");
    const { votes, voteChange } = this.state;

    return (
      <div className={styles.commentCardBody}>
        <p>{comment.body}</p>
        <div className={styles.commentInfo}>
          <p>Author:{comment.author}</p>
          <p>{formattedDate}</p>
        </div>
        <button
          className={styles.deletebutton}
          onClick={deleteComment}
          disabled={comment.author !== user}
          value={comment_id}
        >
          Delete
        </button>
        <Vote
          votes={votes}
          handleCommentVote={this.handleCommentVote}
          voteChange={voteChange}
          comment_id={comment_id}
        />
      </div>
    );
  }
}

export default CommentCard;
