import React from 'react';
import './RepoList.css';

export default function RepoList(props) {
  const listItem = props.repos.map(repo => (
    <li key={repo.id} className="repo-list">
      <div className="repo-list__title">
        <span className="repo-list__title__language">{repo.language}</span>
        <span className="repo-list__title__updated-at">{getFormattedDate(repo.updated_at)}</span>
      </div>
      <div className="repo-list__name">{repo.name}</div>

    </li>
  ));
  return (<ul className="repos">{listItem}</ul>)
}

function getFormattedDate(date) {
    var todayTime = new Date(date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
}
