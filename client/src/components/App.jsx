import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Rate from './Rate.jsx'
import User from './User.jsx'
import Landing from './Landing.jsx'
import Neighborhood from './Neighborhood.jsx'
import City from './City.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }
}

render() {
  return (
    <Landing />
    <Neighborhood />
    <City />
    <User />
    <Rate />
  );
}

window.App = App;

