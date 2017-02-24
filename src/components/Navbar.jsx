import React from 'react';
import Header from './Header.jsx'
import Auth from './Auth.jsx'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <h2 className="navbar-brand" href="/">Community</h2>
        </div>
      </div>
      <ul className="nav navbar-nav">
        <li><a href="/landing">Home</a></li>
        <li><a href="/neighborhood">Neighborhoods</a></li>
      </ul>
      <ul className="text-right">
        <li><Auth /></li>
      </ul>
    </nav>
  )
};
