import React from "react";
import styles from "../style/CommentBody.module.css";

const CommentBody = ({ comment }) => {
  return (
    <div className={styles.body}>
      <p>{comment.body}</p>
      <p>Votes:{comment.votes}</p>
      <p>Author:{comment.author}</p>
      <p>{comment.created_at}</p>
    </div>
  );
};

export default CommentBody;
