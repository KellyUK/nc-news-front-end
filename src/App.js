import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <AllArticles path="/articles" />
      </Router>
    </div>
  );
}

export default App;
