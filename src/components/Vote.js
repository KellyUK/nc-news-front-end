import React, { Component } from "react";
import styles from "../style/Vote.module.css";

class Vote extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  handleUpClick = event => {
    this.props.handleVote
      ? this.props.handleVote(1)
      : this.props.handleCommentVote(1);
  };

  handleDownClick = event => {
    this.props.handleVote
      ? this.props.handleVote(-1)
      : this.props.handleCommentVote(-1);
  };

  render() {
    const { votes, voteChange } = this.props;
    return (
      <div>
        <p className={styles.vote}>Votes: {votes}</p>
        <div className={styles.voteButtons}>
          <button
            className={styles.button}
            onClick={this.handleUpClick}
            disabled={voteChange === 1}
          >
            <i className="fas fa-thumbs-up" />
          </button>
          <button
            className={styles.button}
            onClick={this.handleDownClick}
            disabled={voteChange === -1}
          >
            <i className="fas fa-thumbs-down" />
          </button>
        </div>
      </div>
    );
  }
}

export default Vote;
