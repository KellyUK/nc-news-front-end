import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Article from "./components/Article";
import CommentsList from "./components/CommentsList";

class App extends Component {
  state = { loggedIn: false, topic: "" };

  updateTopic = event => {
    const { value } = event.target;
    this.setState({ topic: value });
  };

  handleLoginClick = event => {
    const { value } = event.target;
    this.setState({ loggedIn: value });
  };

  render() {
    return (
      <div className="App">
        <Header topic={this.updateTopic} loggedIn={this.handleLoginClick} />
        <Router>
          <Home path="/" />
          <ArticlesByTopic path="/articles/" />
          <ArticlesByTopic path="/topics/:topic" />
          <Article path="articles/:article_id" />
          <CommentsList path="article/:article_id/comments" />
        </Router>
      </div>
    );
  }
}

export default App;
