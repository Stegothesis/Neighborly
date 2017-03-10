import React from 'react';

const Footer = () => {
  return (
    <div>
      <section id="bottom">
        <div className="container wow fadeInDown">
          <div className="row"></div>
        </div>
      </section>

      <footer id="footer" className="midnight-blue">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
                <h4 className="white-text"> &copy; 2017 Neighborly. All Rights Reserved </h4>
            </div>
            <div className="col-sm-6">
              <ul className="pull-right">
                <li><a href="https://github.com/Stegothesis/Neighborly" target="_blank">Check us out on GitHub&nbsp;<i className="fa fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

module.exports = Footer;