import React, { Component } from 'react';
import './ProfileCard.css';
import { Link } from 'react-router';

class ProfileCard extends Component {

  render() {
    if (this.props.profile.notFound === 'Not Found') {
      return (
         <div className="notfound">
            <h2>Oops !!!</h2>
            <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
         </div>
      );
    } else {
      return (
        <div className="profile-card">
          <img className="profile-card__avatar" src={this.props.profile.avatar} alt={this.props.profile.name} /> 
          <h3 className="profile-card__name">{this.props.profile.name}</h3>
          <div className="profile-card__location">{this.props.profile.location}</div>
          <div className="profile-card__info">
            <div>
              <div className="profile-card__info__title"><Link to={`repos`}>Repos</Link></div> 
              <div className="profile-card__info__count">{this.props.profile.repos}</div>
            </div>
            <div>
              <div className="profile-card__info__title"><Link to={`followers`}>Followers</Link></div>
              <div className="profile-card__info__count">{this.props.profile.followers}</div>
            </div> 
            <div>
              <div className="profile-card__info__title"><Link to={`following`}>Following</Link></div>
              <div className="profile-card__info__count">{this.props.profile.following}</div>
            </div>
          </div>
          <div className="profile-card__link">
            <a href={this.props.profile.homeUrl} alt={name} target="_blank">Go to github</a>
          </div>
        </div>
    )}
  }
}

export default ProfileCard;