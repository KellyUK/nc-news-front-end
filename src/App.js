import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Article from "./components/Article";
import Error from "./components/Error";

class App extends Component {
  state = { loggedIn: false, topic: "", sortedBy: "" };

  updateTopic = event => {
    const { value } = event.target;
    this.setState({ topic: value });
  };

  handleLoginClick = event => {
    const { value } = event.target;
    this.setState({ loggedIn: value });
  };

  handleSortChange = event => {
    const { value } = event.target;
    this.setState({ sortedBy: value });
  };

  render() {
    const { sortedBy } = this.state;
    return (
      <div className="App">
        <Header
          topic={this.updateTopic}
          handleLoginClick={this.handleLoginClick}
          handleSortChange={this.handleSortChange}
        />
        <Router>
          <Home path="/" />
          <ArticlesByTopic path="/articles/" sortedBy={sortedBy} />
          <ArticlesByTopic path="/topics/:topic" />
          <Article path="articles/:article_id" />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
