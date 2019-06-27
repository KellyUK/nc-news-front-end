import React, { Component } from "react";

class Vote extends Component {
  state = { isLoading: true, voteChange: 0 };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    const { voteChange } = this.state;
    const { handleVote, votes } = this.props;
    return (
      <div>
        <p>Votes: {votes + voteChange}</p>
        <button onClick={() => handleVote(1)}>Vote up</button>
        <button onClick={() => handleVote(-1)}>Vote Down</button>
      </div>
    );
  }
}

export default Vote;
