import React from 'react';

let followings = [{login:'nada'}];

function fetchFollowing() {
  // const username = this.state.username;
  let url = `https://api.github.com/users/${this.props.user}/following`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      followings = data;
      // this.setState({my_repos: data})
    })
    .catch((error) => console.log('Oops! . repos problem  '))
};

export default class FollowingList extends React.Component {

  constructor() {
    super();
    this.state = {my_repos:'nada'};
  }
  
  componentWillMount() {
    // const username = this.state.username;
    let url = `https://api.github.com/users/${this.props.user}/following`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        followings = data;
        this.setState({my_repos: data})
      })
      .catch((error) => console.log('Oops! . repos problem  '))
  }
  
  render(){
    return (
      <ul>
        <li>{this.state.my_repos[0].login}</li>
      </ul>
    )
  }
}