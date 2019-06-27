import React, { Component } from "react";

class Vote extends Component {
  state = { isLoading: true, voteChange: 0 };

  componentDidMount() {
    this.setState({
      isLoading: false,
      voteChange: 0
    });
  }

  render() {
    const { voteChange } = this.state;
    const { handleVote } = this.props;
    return (
      <div>
        <p>Votes: {this.props.votes + this.state.voteChange}</p>
        <button onClick={() => handleVote(1)} disabled={voteChange > 0}>
          Vote up
        </button>
        <button onClick={() => handleVote(-1)}>Vote Down</button>
      </div>
    );
  }
}

export default Vote;
