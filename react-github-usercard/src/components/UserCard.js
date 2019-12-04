import React from 'react';


const UserCard = (props) => {

    return (
        <div>
            <img src = {props.frog.avatar_url} alt = 'Account User' />
            <p>ID: {props.frog.id}</p>
            <p>Username: {props.frog.login}</p>
            <p>Github url: {props.frog.url}</p>
        </div>
    )

}
export default UserCard;


// const UserCard = (props) => {
//   const { 
//     avatar_url, 
//     id, 
//     name, 
//     login, 
//     location,
//     url,
//     followers,
//     bio } = props.frog;

//     return (
//       <div>
//         <div><img src = {avatar_url} alt = 'Account User' /></div>
//         <div>
//         <p>ID: {id}</p>
//         <p>Name: {name}</p>
//         <p>Username: {login}</p>
//         <p>Location: {location}</p>
//         <p>Github url: {url}</p>
//         <p>Bio: {bio}</p>
//         <p>Follower count: {followers}</p>
//         </div>
//       </div>
//     )
// }

// export default UserCard;