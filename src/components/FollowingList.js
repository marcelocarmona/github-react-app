import React from 'react';

export default class FollowingList extends React.Component {

  constructor() {
    super();
    this.state = {
      following: [],
      isFetching: false, 
      fetchingError: false,
    };
  }
  
  componentDidMount() {
    let url = `https://api.github.com/users/${this.props.user}/following`;
    this.setState({isFetching: true});
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({following: data, isFetching: false})
      })
      .catch((error) => this.setState({isFetching: false, fetchingError: true}))
  }
  
  render() {
    if(this.state.isFetching) {
      return (
        <div>Loading...</div>
      )
    } else if(this.state.fetchingError) {
        return (
          <div>ERROR!!!</div>
        )
      } else if(this.state.following.length > 0) {
          return (
            <ul>
              {this.state.following.map( repo => <li key={repo.id}>{repo.login}</li>)}
            </ul>
          )
        } else {
          return (
            <div>No estas siguiendo a nadie</div>
          )
        }
  }
}