import React from 'react';

const Repo = ({ repo }) => {
  return (
    <ul className="collection hoverable">
      <li className="collection-item avatar green darken-1 black-text">
        <img src={repo.owner.avatar_url} alt="avatar" className="circle" />
        <p className="title">
          {repo.name}
        </p>
        <p>
          <a href={repo.html_url} className="black-text">
            {repo.html_url}
          </a>
        </p>
        <p>
          <i className="fa fa-star material-icons" aria-hidden="true" />{' '}
          {repo.stargazers_count} {'  |  '}
          <i className="fa fa-eye material-icons" aria-hidden="true" />{' '}
          {repo.watchers_count}
        </p>
      </li>
    </ul>
  );
};

export default Repo;
