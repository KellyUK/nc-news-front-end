import React, { Component } from "react";

class ArticlesByTopic extends Component {
  state = { topic: "", articles: [] };
  render() {
    return (
      <div>
        <p>Articles By Topic</p>
      </div>
    );
  }
}

export default ArticlesByTopic;
