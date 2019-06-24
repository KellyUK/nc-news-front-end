import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import Article from "./components/Article";

class App extends Component {
  state = { loggedIn: false, topic: "" };

  render() {
    console.log("topic", this.topic);
    return (
      <div className="App">
        <Header topic={this.topic} updateTopic={this.topic} />
        <Router>
          <Home path="/" />
          <AllArticles path="/articles/*" />
          <ArticlesByTopic path="/articles/:topic" />
          <Article path="articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
