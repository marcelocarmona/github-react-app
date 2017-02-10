import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import RepoList from './components/RepoList';
import FollowerList from './components/FollowerList';
import FollowingList from './components/FollowingList';

let losRepos;

function fetchRepos() {
  // const username = this.state.username;
  let url = `https://api.github.com/users/marcelocarmona/repos`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      losRepos = data;
      // this.setState({my_repos: data})
    })
    .catch((error) => console.log('Oops! . repos problem  '))
};
fetchRepos();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="repos" component={() => <RepoList repos={losRepos}></RepoList>}/>
      <Route path="followers" component={FollowerList}/>
      <Route path="following" component={FollowingList}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
