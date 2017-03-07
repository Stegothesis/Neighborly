import React from 'react';
import Auth from './Auth.jsx'

export const Navbar = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-inverse" role="banner">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img src="images/logo.png" class="image1" alt="logo"/></a>
          </div>

          <div className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Search</a></li>
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

module.exports = Navbar;







