import React, { Component } from "react";

class Vote extends Component {
  state = { article_id: "", isLoading: true, votes: 0 };

  componentDidMount() {
    const { article_id, votes } = this.props;
    this.setState({
      article_id: article_id,
      votes: votes,
      isLoading: false
    });
  }

  render() {
    const { votes } = this.state;
    return (
      <div>
        <p>Votes: {votes}</p>
        <button>Vote up</button>
        <button>Vote Down</button>
      </div>
    );
  }
}

export default Vote;
