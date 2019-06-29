import React, { Component } from "react";
import { getCommentsByArticleId, deleteCommentById } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { get } from "http";

class CommentsList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    getCommentsByArticleId(article_id).then(comments =>
      this.setState({ comments: comments, isLoading: false })
    );
  }

  addComment = comment => {
    this.setState(prevState => ({
      comments: [comment, ...prevState.comments]
    }));
  };

  deleteComment = event => {
    event.preventDefault();
    const { article_id, user } = this.props;
    const { value } = event.target;
    deleteCommentById({ comment_id: value }).then(() =>
      getCommentsByArticleId(article_id).then(comments => {
        this.setState({ comments: comments });
      })
    );
  };
  render() {
    const { comments } = this.state;
    const { article_id, user } = this.props;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <AddComment
          article_id={article_id}
          addComment={this.addComment}
          user={user}
        />
        {comments.map(comment => (
          <CommentCard
            comment={comment}
            key={comment.comment_id}
            comment_id={comment.comment_id}
            deleteComment={this.deleteComment}
            user={user}
          />
        ))}
      </div>
    );
  }
}

export default CommentsList;
