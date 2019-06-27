import React from "react";
import styles from "../style/CommentBody.module.css";
import moment from "moment";

const CommentBody = ({ comment }) => {
  const rawDate = comment.created_at;
  const formattedDate = moment(rawDate).format("YYYY MM DD");
  return (
    <div className={styles.body}>
      <p>{comment.body}</p>
      <p>Votes:{comment.votes}</p>
      <p>Author:{comment.author}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default CommentBody;
