import React, { Component } from "react";
import { getUserByUsername } from "../api";
import Loading from "./Loading";
import styles from "../style/User.module.css";

class User extends Component {
  state = { user: {}, isLoading: true };

  componentDidMount() {
    const { username } = this.props;
    getUserByUsername(username).then(user => {
      this.setState({
        user: user,
        isLoading: false
      });
    });
  }
  render() {
    const { user, isLoading } = this.state;
    const avatar = user.avatar_url;
    return isLoading ? (
      <Loading isLoading={this.isLoading} />
    ) : (
      <div>
        <img className={styles.pic} src={avatar} alt="user avatar" />
        <p>Written by: {user.name}</p>
      </div>
    );
  }
}

export default User;
