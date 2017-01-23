import React, { Component } from 'react';
import './SearchProfile.css';

class SearchProfile extends Component {
    constructor() {
      super()
    }

    handleForm(e) {
      e.preventDefault();
      let username = this.refs.username.value
      this.props.fetchProfile(username);
      this.refs.username.value = '';
    }

   render() {
    return (
      <div className="search-box">
         <form onSubmit={this.handleForm.bind(this)}>
           <label><input type="search" ref="username" placeholder="Github username"/></label>
         </form>
      </div>
    )
   }
}

export default SearchProfile;