import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, Link, browserHistory } from 'react-router';


function Repos(props) {
  // const listItem = props.repos.map(repo => (
  //   <li key={repo.id} className="repo-list">
  //     <div>{repo.name}</div>
  //     <div>{repo.language}</div>
  //     <div>{repo.updated_at}</div>
  //   </li>
  // ));
  const listItem = <li>Probando repos</li>
  return (<ul className="repos">{listItem}</ul>)
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="repos" component={Repos}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
