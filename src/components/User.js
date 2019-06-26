import React, { Component } from "react";
import { getUserByUsername } from "../api";
import Loading from "./Loading";

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
        <p>Written by: {user.name}</p>
        <img src={avatar} alt="user avatar" />
      </div>
    );
  }
}

export default User;
