import React from 'react';
import ReactDOM from 'react-dom'

export default class Auth exntends React.Component {
  constructor(props) {
    super(props);
  }
  showAuthenticate () {
    //Show the authentication window
    this.props.lock.show();
  }

  render() {
    return (
      <div className="login-auth">
        <a onClick = {this.showAuthenticate.bind(this)}> Sign In</a>
        </div>
      );
    }
  }