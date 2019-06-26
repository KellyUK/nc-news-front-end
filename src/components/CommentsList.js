import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import Loading from "./Loading";
import CommentBody from "./CommentBody";
import AddComment from "./AddComment";
import postCommentOnArticle from "../api";

class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    getCommentsByArticleId(this.props.article_id).then(comments =>
      this.setState({ comments: comments, isLoading: false })
    );
  }

  componentDidUpdate() {
    postCommentOnArticle(this.props.article_id).then(comments => {
      this.setState({ comments: comments });
    });
  }

  render() {
    const { comments } = this.state;

    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <AddComment />
        {comments.map(comment => (
          <div>
            <CommentBody comment={comment} key={comment.comment_id} />
          </div>
        ))}
      </div>
    );
  }
}

export default CommentsList;
