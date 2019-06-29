import React, { Component } from "react";
import styles from "../style/Vote.module.css";

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
        <button
          className={styles.button}
          onClick={() => handleVote(1)}
          disabled={voteChange - votes > 1}
        >
          <i className="fas fa-thumbs-up" />
        </button>
        <button
          className={styles.button}
          onClick={() => handleVote(-1)}
          disabled={voteChange > 1}
        >
          <i className="fas fa-thumbs-down" />
        </button>
      </div>
    );
  }
}

export default Vote;
