import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import Article from "./components/Article/Article";
import Error from "./components/Error";
import Home from "./components/Home/Home";

class App extends Component {
  state = { loggedIn: "", user: "JessJelly" };

  handleLoginClick = event => {
    const { value } = event.target;
    this.setState({ loggedIn: value });
  };

  render() {
    const { loggedIn, user } = this.state;
    return (
      <div className="App">
        <Header user={user} />
        <Router>
          <Home path="/" />
          <Articles path="/articles/" />
          <Articles path="/topics/:topic" loggedIn={loggedIn} />
          <Article path="articles/:article_id" user={user} />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;
