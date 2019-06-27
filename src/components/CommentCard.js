import React from "react";
import styles from "../style/CommentCard.module.css";
import moment from "moment";

const CommentCard = ({ comment, deleteComment, comment_id }) => {
  const rawDate = comment.created_at;
  const formattedDate = moment(rawDate).format("YYYY MM DD");

  return (
    <div className={styles.body}>
      <p>{comment.body}</p>
      <p>Votes:{comment.votes}</p>
      <p>Author:{comment.author}</p>
      <p>{formattedDate}</p>
      <button onClick={deleteComment} value={comment_id}>
        Delete Comment
      </button>
    </div>
  );
};

export default CommentCard;
