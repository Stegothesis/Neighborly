import React from 'react';
import ReactDOM from 'react-dom';

var Rate = require('./Rate.jsx');
var User = require('./User.jsx');
var Landing = require('./Landing.jsx');
var Neighborhood = require('./Neighborhood.jsx');
var City = require('./City.jsx');

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <Landing />
      <Neighborhood />
      <City />
      <User />
      <Rate />
      </div>
    );
  }

}


export default App
