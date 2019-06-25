import React from "react";

const CommentBody = ({ comment }) => {
  return (
    <div>
      <p>{comment.body}</p>
      <p>Votes:{comment.votes}</p>
      <p>Author:{comment.author}</p>
      <p>{comment.created_at}</p>
    </div>
  );
};

export default CommentBody;
