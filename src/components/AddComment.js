import styles from "../style/AddComment.module.css";
import React, { Component } from "react";

class AddComment extends Component {
  // state = { userInput: value };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ userInput: value });
  };

  render() {
    const { userInput } = this.state;
    return (
      <form
        className={styles.body}
        onSubmit={event => {
          event.preventDefault();
          this.props.updateComment(this.state.userInput);
          this.setState({ userInput: "" });
        }}
      >
        Comment:{""}
        <input
          type="text"
          name="newComment"
          // value={this.state.userInput}
          // onChange
          // {...updateComment}
        />
        Name: <input type="text" name="usersName" />
        <button>Add New Comment</button>
      </form>
    );
  }
}

export default AddComment;
