import React, { Component } from "react";

class Vote extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { handleVote, votes, voteChange } = this.props;
    return (
      <div>
        <p>Votes: {votes}</p>
        <button onClick={() => handleVote(1)} disabled={voteChange - votes > 1}>
          Vote Up
        </button>
        <button onClick={() => handleVote(-1)} disabled={voteChange > 1}>
          Vote Down
        </button>
      </div>
    );
  }
}

export default Vote;
