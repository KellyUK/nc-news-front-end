import styles from "../style/AddComment.module.css";
import React, { Component } from "react";
import { postCommentOnArticle } from "../api";

class AddComment extends Component {
  state = { body: "", username: "", comment: {} };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { article_id } = this.props;
    const { username, body } = this.state;
    const author = username;
    console.log(author);
    event.preventDefault();
    postCommentOnArticle(article_id, { author, body }).then(comment => {
      this.state({ comment: comment });
    });
  };

  render() {
    const { body, username } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input name="body" value={body} onChange={this.handleChange} />
          </label>
          <label>
            Username:
            <input
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddComment;
