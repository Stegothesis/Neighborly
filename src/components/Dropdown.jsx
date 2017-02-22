import React from 'react';

const Dropdown = () => {
  return <div className="dropdown">
    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Filter Dropdown
    <span className="caret"></span></button>
    <ul className="dropdown-menu">
      <li><a href="#">Filter 1</a></li>
      <li><a href="#">Filter 2</a></li>
      <li><a href="#">Filter 3</a></li>
    </ul>
  </div>
}

module.exports = Dropdown;