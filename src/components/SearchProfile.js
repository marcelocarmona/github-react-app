import React, { Component } from 'react';
import './SearchProfile.css';
import { browserHistory } from 'react-router';


class SearchProfile extends Component {

    handleForm(e) {
      e.preventDefault();
      let username = this.refs.username.value
      this.props.onSearch(username);
      this.refs.username.value = '';
      browserHistory.push('/');
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