import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import { EventEmitter } from 'events'

export default class Auth {
  constructor(clientId, domain) {
    //Auth0
    let HOST_URL = process.env.NODE_ENV === 'production'? 'http://localhost:8080/#/';
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: HOST_URL,
        responseType: 'token'
      }
    });
    this.event = new EventEmitter();
    this.lock.on('authenticated', this.authenticateUser.bind(this));
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
}

authenticateUser(result) {
  this.setToken(result.idToken);
  this.lock.getUserInfo(result.accessToken, (error, profile) => {
    if (error) {
      console.log('Error', error);
    } else {
      this.setProfile(profile);
    }
  });
  browserHistory.replace({pathname: '/#/dashboard'});
}

setProfile(profile) {
  localStorage.setItem('profile', JSON.stringify(profile));
  this.event.emit('profile_update', profile);
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
}

