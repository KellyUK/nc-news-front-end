import React from "react";
import styles from "../style/AddComment.module.css";

const AddComment = () => {
  return (
    <form className={styles.body}>
      Comment: <input type="text" name="newComment" />
      Name: <input type="text" name="usersName" />
      <button>Add New Comment</button>
    </form>
  );
};

export default AddComment;
