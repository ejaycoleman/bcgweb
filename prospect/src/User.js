import React, { Component } from 'react';

import user from './assets/user.jpg'

class User extends Component {

  render() {
    return (
      <div>
        <img style={{width: '80%'}} src={user} alt="Logo" />
        <div style={{textAlign: 'left', marginLeft: '10%', marginRight: '10%'}}>
          <h1>John</h1>
          <h3>Hi, I'm John. I'm an aspiring guitarist, hoping to teach others how to play.</h3>
          <h2>Acheivements</h2>
        </div>
      </div>
    );
  }
}

export default User;
