import React from 'react';

const Team = () => {
  return (
    <div>
      <section id="contact-info">
        <div className="gmap-area">
          <div className="container">
            <div className="row">

              <div className="col-sm-6 text-center">
                <div className="gmap">
                    <img src="./images/seattle1.png" />
                </div>
              </div>
              <div className="col-sm-6 map-content">
                <div className="row">
                  <div className="center wow fadeInDown">
                      <h2>Search Any City or Neighborhood Across The U.S.</h2>
                      <p className="lead">Looking for perspectives on specific neighborhoods across America? Neighborly reports information from thousands of small communities to allow you to find the best neighborhoods for your lifestyle.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section id="feature" >
        <div className="container">
          <div className ="center wow fadeInDown">
            <h2></h2>
            <p className ="lead"></p>
          </div>
          <div className="center wow fadeInDown">
            <h2>Raw Neighborhood Data</h2>
            <p className="lead">Neighborly offers objective data and statistics so that you know what's up. If you're looking for hard facts about your next home, you're in the right place.</p>
          </div>
        </div>
      </section>

      <section id="partner">
          <div className="container">
              <div className ="center wow fadeInDown">
                <h2></h2>
                <p className ="lead"></p>
              </div>
              <img className="img-responsive center" src="../images/neighborhoodData.png" />
          </div>
      </section>


      <section id="feature" >
        <div className="container">
          <div className ="center wow fadeInDown">
            <h2></h2>
            <p className ="lead"></p>
          </div>
          <div className="center wow fadeInDown">
            <h2>Have An Opinion?</h2>
            <p className="lead">Get in touch with loyal users of Neighborly and see what they have to say. Want to share your perspective? Our detailed and customizable rating system ensures that you get your point across.</p>
          </div>
          <img className="img-responsive center" src="/images/reviews.png"></img>
        </div>
      </section>


      <section id="feature" className="transparent-bg">
        <div className="container">
          <div className="clients-area center">
            <h2>Meet The Team</h2>
          </div>

          <div className="row">

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/renatavmaraj" target="_blank">
                  <img src="images/profile/renata.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Renata Maraj </span><br />  Software Engineer</h4>
                <a href="https://github.com/renatavmaraj" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/renatamaraj/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/michiang" target="_blank">
                  <img src="images/profile/michael.png" className="img-circle" alt="" />
                </a>
                <h4><span>Michael Chiang </span><br /> Software Engineer</h4>
                <a href="https://github.com/michiang" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/michael-chiang-b68603117/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bchasset" target="_blank">
                  <img src="images/profile/brian.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Brian Hassett </span><br />  Software Engineer</h4>
                <a href="https://github.com/bchasset" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/bhassett/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bruce-graham" target="_blank">
                  <img src="images/profile/bruce.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Bruce Graham </span><br />  Software Engineer</h4>
                <a href="https://github.com/bruce-graham" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/brucegraham11/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

module.exports = Team;