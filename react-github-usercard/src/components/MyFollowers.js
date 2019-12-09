import React from 'react';
import axios from "axios";

import UserCard from './UserCard'

class Followers extends React.Component {
  state = { followers: [] };

  componentDidMount() {
    axios.get("https://api.github.com/users/astubbings/followers")
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { followers } = this.state;

    if (followers === null) {
        return <div>Loading...</div>
      }

    return (
      followers.map(follower => {
        const { id } = follower;

        return (
          <UserCard key = {id} frog = {follower} />
        )
      })
    )
  }
}

export default Followers;