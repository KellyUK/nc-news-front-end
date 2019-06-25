import React from "react";

const AddComment = () => {
  return (
    <form>
      Comment: <input type="text" name="newComment" />
      Name: <input type="text" name="usersName" />
      <button>Add New Comment</button>
    </form>
  );
};

export default AddComment;
