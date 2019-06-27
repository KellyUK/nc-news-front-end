import React from "react";

const SortArticles = ({ handleSort }) => {
  return (
    <div className="dropdown">
      <button name="comment_count" value="comment_count" onClick={handleSort}>
        Most Comments
      </button>
      <button name="created_at" value="created_at" onClick={handleSort}>
        Most Recent
      </button>
      <button name="votes" value="votes" onClick={handleSort}>
        Votes
      </button>
    </div>
  );
};

export default SortArticles;
