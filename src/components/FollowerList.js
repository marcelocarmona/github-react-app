import React from 'react';

export default class FollowerList extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      isFetching: false,
      fetchingError: false
    };
  }

  componentDidMount() {
    let url = `https://api.github.com/users/${this.props.user}/followers`;
    this.setState({isFetching: true});
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({followers: data, isFetching: false}))
      .catch(err => this.setState({fetchingError: true, isFetching: false}));
  }

  render(){ 
    if(this.state.isFetching) {
      return (
        <div>Loading ...</div>
      )
    } else if (this.state.fetchingError) {
      return (
        <div>Error !!!</div>
      )
    } else if (this.state.followers.length === 0) {
       return (
         <div>no tienes followers :(</div>
       )
    } else {
      return (
        <ul>
          {this.state.followers.map( follower => <li key={follower.id}>{follower.login}</li>)}
        </ul>
      )
    }
  }
}