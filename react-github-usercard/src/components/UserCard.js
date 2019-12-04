import React from 'react';


// const UserCard = (props) => {

//     const { user } = props.user;

//     return (
//         <div>
//             <
//         </div>
//     )

// }



const UserCard = (props) => {
  const { 
    avatar_url, 
    id, 
    name, 
    login, 
    location,
    url,
    followers,
    bio } = props.user;

    return (
      <div>
        <div><img src = {avatar_url} alt = 'Account User' /></div>
        <div>
        <p>ID: {id}</p>
        <p>Name{name}</p>
        <p>Username: {login}</p>
        <p>Location: {location}</p>
        <p>Github url: {url}</p>
        <p>Bio: {bio}</p>
        <p>Follower count: {followers}</p>
        </div>
      </div>
    )
}

export default UserCard;