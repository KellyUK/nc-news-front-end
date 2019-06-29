import React from "react";
import styles from "../style/CommentCard.module.css";
import moment from "moment";

const CommentCard = ({ comment, deleteComment, comment_id, user }) => {
  const rawDate = comment.created_at;
  const formattedDate = moment(rawDate).format("Do MMM YYYY");

  return (
    <div className={styles.commentCardBody}>
      <p>{comment.body}</p>
      <p>Votes:{comment.votes}</p>
      <p>Author:{comment.author}</p>
      <p>{formattedDate}</p>
      <button
        className={styles.deletebutton}
        onClick={deleteComment}
        disabled={comment.author !== user}
        value={comment_id}
      >
        Delete
      </button>
    </div>
  );
};

export default CommentCard;
