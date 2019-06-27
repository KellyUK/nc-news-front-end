import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

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

  render() {
    const { comments } = this.state;
    const { article_id } = this.props;
    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <AddComment article_id={article_id} addComment={this.addComment} />
        {comments.map(comment => (
          <CommentCard comment={comment} key={comment.comment_id} />
        ))}
      </div>
    );
  }
}

export default CommentsList;
