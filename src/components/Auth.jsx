import React from 'react';
import ReactDOM from 'react-dom'
import Auth0Lock from 'auth0-lock'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { EventEmitter } from 'events'
import { browserHistory } from 'react-router'
import { updateLoggedInStatus } from '../actions/authactions.jsx';

export class Auth extends React.Component {
  constructor() {
    //Auth0
    super()
    //let HOST_URL = process.env.NODE_ENV | 'http://localhost:8080';
    this.lock = new Auth0Lock('oLxR3LLElIwpotfRYXAv49iLkRwL1q1y', 'stegothesis.auth0.com', {
      auth: {
        //redirectUrl: HOST_URL,
        responseType: 'token',
        params: {
          scope: 'openid name email user_id'
        }
      }
    });
    // this.event = new EventEmitter();
    this.lock.on('authenticated', this.authenticateUser.bind(this));
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (this.loggedIn()) {
      var user = {}
      user.name = this.getProfile().name;
      user.token = this.getToken();
      this.props.updateLoggedInStatus(user);
    }
  }

authenticateUser(result) {
  console.log('authenticatingggg')
  this.setToken(result.idToken);
  this.lock.getUserInfo(result.accessToken, (error, profile) => {
    if (error) {
      console.log('Error', error);
    } else {
      this.setProfile(profile);
    }
  });
  // browserHistory.replace({pathname: '/#/dashboard'});
}

setProfile(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
  // this.event.emit('profile_update', profile);
}

setToken(idToken) {
  //Store token in localStorage
  localStorage.setItem('token', idToken);
}

getProfile(callback) {
  const profile = localStorage.getItem('profile');
  return profile ? JSON.parse(profile) : {};
}

getToken() {
  return localStorage.getItem('token');
}

login () {
  this.lock.show();
}

loggedIn() {
  return !!this.getToken();
}

logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('profile');
  browserHistory.replace('/');
}

  render() {
    return (
      <div className="login-auth">
        <a onClick = {this.login.bind(this)}>Sign In </a>
        <a onClick = {this.logout.bind(this)}> Sign Out</a>
        </div>
      );
    }
  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLoggedInStatus }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);