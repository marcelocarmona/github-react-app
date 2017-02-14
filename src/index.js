import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RepoList from './components/RepoList';
import FollowerList from './components/FollowerList';
import FollowingList from './components/FollowingList';

let losRepos;
let theUser;

function fetchRepos(user) {
  // const username = this.state.username;
  let url = `https://api.github.com/users/${user}/repos`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      losRepos = data;
      theUser = user;
      // this.setState({my_repos: data})
    })
    .catch((error) => console.log('Oops! . repos problem  '))
};
fetchRepos('marcelocarmona');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="repos" component={() => <RepoList repos={losRepos} />}/>
      <Route path="followers" component={FollowerList}/>
      <Route path="following" component={() => <FollowingList user={theUser} />}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
