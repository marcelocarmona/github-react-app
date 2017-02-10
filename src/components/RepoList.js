import React from 'react';

export default function RepoList(props) {
  const listItem = props.repos.map(repo => (
    <li key={repo.id} className="repo-list">
      <div>{repo.name}</div>
      <div>{repo.language}</div>
      <div>{repo.updated_at}</div>
    </li>
  ));
  return (<ul className="repos">{listItem}</ul>)
}