import React, { Component } from "react";
import { postCommentOnArticle } from "../../api";
import styles from "../../style/AddComment.module.css";

class AddComment extends Component {
  state = { body: "" };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: value
    });
  };

  handleSubmit = event => {
    const { article_id, user } = this.props;
    const { body } = this.state;
    const author = user;
    event.preventDefault();
    postCommentOnArticle(article_id, { author, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ body: "" });
    });
  };

  render() {
    const { body } = this.state;
    return (
      <form className={styles.body} onSubmit={this.handleSubmit}>
        <p className={styles.title}>Have your say:</p>
        <label>
          <input
            className={styles.inputbox}
            name="body"
            value={body}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className={styles.button}>Submit</button>
      </form>
    );
  }
}

export default AddComment;
