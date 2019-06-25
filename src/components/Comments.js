import React, { Component } from "react";
import { getCommentsByArticleId } from "../api";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";

class Comments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    getCommentsByArticleId(this.props.article_id).then(comments =>
      this.setState({ comments: comments, isLoading: false })
    );
  }

  render() {
    const { comments } = this.state;

    return this.state.isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        {/* <ArticleCard /> */}
        <button>Add New Comment</button>
        {comments.map(comment => (
          <div>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes}</p>
            <p>Author:{comment.author}</p>
            <p>{comment.created_at}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
