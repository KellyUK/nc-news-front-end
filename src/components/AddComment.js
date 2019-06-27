import React, { Component } from "react";
import { postCommentOnArticle } from "../api";
import styles from "../style/AddComment.module.css";

class AddComment extends Component {
  state = { body: "", username: "" };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit = event => {
    const { article_id } = this.props;
    const { username, body } = this.state;
    const author = username;
    event.preventDefault();
    postCommentOnArticle(article_id, { author, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ body: "", username: "" });
    });
  };

  render() {
    const { body, username } = this.state;
    return (
      <div>
        <form className={styles.body} onSubmit={this.handleSubmit}>
          <p className={styles.title}>Have your say:</p>
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
