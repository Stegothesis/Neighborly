import React from 'react';

const Team = () => {
  return (
    <div>
    <div className="feature-section">
    <div className="clients-area center">
       <h2>Meet Your Next Neighborhood</h2>
    </div>

    <div className="featurette featurette1">
      <div className="col-sm-10 col-md-7 text-container">
        <h2 className="featurette-heading">Search Any City or Neighborhood<span className="text-muted"> Across The U.S.</span></h2>
        <p className="lead">Looking for perspectives on specific neighborhoods across America? Neighborly reports information from thousands of small communities to allow you to find the best neighborhoods for your lifestyle.</p>
      </div>
      <div class="col-md-5">
        <img src="/images/mapbackground.png" className="image2" alt="Map Background"></img>
      </div>
    </div>

    <hr className="featurette-divider"></hr>

    <div className="featurette featurette2">
      <div className="row">
        <div className="col-sm-10 col-md-7 text-container">
          <h2 className="featurette-heading pull-right">Raw Neighborhood Data<span className="text-muted"> At Your Fingertips.</span></h2>
          <p className="lead pull-right">Neighborly offers objective data and statistics so that you know what's up. If you're looking for hard facts about your next home, you're in the right place.</p>
        </div>
         <div class="col-md-5">
          <img src="/images/neighborhoodData.png" className="data-image" alt="Map Background"></img>
        </div>
      </div>
    </div>

    <hr className="featurette-divider"></hr>

    <div className="featurette featurette3">
      <div className="col-sm-10 col-md-7 text-container">
        <h2 className="featurette-heading">Leave Your Mark<span className="text-muted"> Have An Opinion?</span></h2>
        <p className="lead">Get in touch with loyal users of Neighborly and see what they have to say. Want to share your perspective? Our detailed and customizable rating system ensures that you get your point across.</p>
      </div>
      <div class="col-md-5">
        <img src="/images/reviews.png" className = "reviews-image" alt="Map Background"></img>
      </div>
    </div>
  </div>
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
          <br /><br /><br /><br />
              <hr className="featurette-divider"></hr>



    <section id="feature" className="transparent-bg">
        <div className="container">
          <br /><br /><br /><br />
          <div className="clients-area center">
            <h2>Meet The Team</h2>
          </div>

          <div className="row">
            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/renatavmaraj" target="_blank">
                  <img src="images/profile/renata.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Renata Maraj /</span>  Software Engineer</h4>
                <a href="https://github.com/renatavmaraj" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/renatamaraj/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/michiang" target="_blank">
                  <img src="images/profile/michael.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Michael Chiang /</span> Software Engineer</h4>
                <a href="https://github.com/michiang" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/michael-chiang-b68603117/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bchasset" target="_blank">
                  <img src="images/profile/brian.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Brian Hassett /</span>  Software Engineer</h4>
                <a href="https://github.com/bchasset" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/bhassett/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bruce-graham" target="_blank">
                  <img src="images/profile/bruce.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>Bruce Graham /</span>  Software Engineer</h4>
                <a href="https://github.com/bruce-graham" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/brucegraham11/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

         </div>
        </div>
    </section>
    </div>
  );
}

module.exports = Team;