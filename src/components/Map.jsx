import React from 'react';

const Maps = (props) => {
  return <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner" role="listbox">
      <div className="item active">
        <img className="first-slide" src="https://cmgstatesmanaustin.files.wordpress.com/2015/09/austin.png" />
        <div className="container">
        </div>
      </div>
    </div>
    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
}

module.exports = Maps;
