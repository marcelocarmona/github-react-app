import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchProfile from './SearchProfile';
import ProfileCard from './ProfileCard';


class App extends Component {

  constructor() {
    super();
    this.state = {
      username: 'marcelocarmona',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }

  fetchProfile(username) {
    let url = `https://api.github.com/users/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem'))
  }

  componentDidMount() {
    this.fetchProfile(this.state.username)
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github user search with React</h2>
        </header>
        <div className="App__main">
          <SearchProfile fetchProfile={ this.fetchProfile.bind(this) }></SearchProfile>
          <ProfileCard profile={ this.state }></ProfileCard>
        </div>
        <footer className="App__footer">
          <a href="https://twitter.com/carmonamarcelo" target="_blank"> @carmonamarcelo</a>
        </footer>
      </div>
    );
  }
}

export default App;
