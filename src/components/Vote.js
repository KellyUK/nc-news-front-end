import React, { Component } from "react";

class Vote extends Component {
  state = { article_id: "", isLoading: true, votes: 0, voteChange: 0 };

  componentDidMount() {
    const { article_id, votes } = this.props;
    this.setState({
      article_id: article_id,
      votes: votes,
      isLoading: false,
      voteChange: 0
    });
  }

  render() {
    const { votes, voteChange, article_id } = this.state;
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
