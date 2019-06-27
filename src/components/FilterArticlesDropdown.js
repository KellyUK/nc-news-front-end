import React from "react";

const FilterArticlesDropdown = ({ handleSortChange }) => {
  return (
    <div className="dropdown">
      <select>
        <option onChange={handleSortChange} value="created_at">
          Newest
        </option>
        <option onChange={handleSortChange} value="votes">
          Most Votes
        </option>
        <option onChange={handleSortChange} value="comment_count">
          Most Comments
        </option>
      </select>
    </div>
  );
};

export default FilterArticlesDropdown;
