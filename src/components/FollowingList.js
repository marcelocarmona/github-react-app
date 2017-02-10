import React from 'react';

let followings = [{login:'nada'}];

function fetchFollowing() {
  // const username = this.state.username;
  let url = `https://api.github.com/users/marcelocarmona/following`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      followings = data;
      // this.setState({my_repos: data})
    })
    .catch((error) => console.log('Oops! . repos problem  '))
};

export default function FollowingList() {
    fetchFollowing();
  return (
    <ul>
      <li>{followings[0].login}</li>
    </ul>
  )
}