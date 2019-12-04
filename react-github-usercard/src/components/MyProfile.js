import React from 'react';
import axios from "axios";

import UserCard from './UserCard'

class Profile extends React.Component {
  state = { user: null };

  componentDidMount() {
    axios.get("https://api.github.com/users/astubbings")
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    const { user } = this.state;

    if (user === null) {
      return <div>Loading...</div>
    }

    return (
      <UserCard user = {user} />
    )
  }
}

export default Profile;