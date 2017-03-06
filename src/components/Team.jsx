import React from 'react';

const Team = () => {
  return (
    <div>
    <div class="feature-section">
    <div className="clients-area center">
       <h2>Meet Your Next Neighborhood</h2>
    </div>

    <div class="featurette featurette1">
      <div class="col-sm-10 col-md-7 text-container">
        <h2 class="featurette-heading">Search Any City or Neighborhood<span class="text-muted"> Across The U.S.</span></h2>
        <p class="lead">Customizable search features that allow you to search, order, and filter results to find the best neighborhoods for your lifestyle.</p>
      </div>
    </div>

    <hr class="featurette-divider"></hr>

    <div class="featurette featurette2">
      <div class="row">
        <div class="col-sm-10 col-md-7 text-container">
          <h2 class="featurette-heading">Raw Neighborhood Data<span class="text-muted"> Find Your Place.</span></h2>
          <p class="lead">Neighborly offers objective API data and statistics so that you know what's up. If you're looking for hard facts, you're in the right place.</p>
        </div>
      </div>
    </div>

    <hr class="featurette-divider"></hr>

    <div class="featurette featurette3">
      <div class="col-sm-10 col-md-7 text-container">
        <h2 class="featurette-heading">Leave Your Mark<span class="text-muted"> Have An Opinion?</span></h2>
        <p class="lead">Get in touch with loyal users of Neighborly and see what they have to say about certain neighborhoods. Have an opinion about the area? Leave reviews and ratings. Just remember to be neighborly!</p>
      </div>
    </div>
  </div>

    <section id="feature" className="transparent-bg">
        <div className="container">
          <br /><br /><br /><br />
          <div className="clients-area center">
            <h2>Our Team</h2>
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
                <h4><span>Michael Chiang /</span>  Software Engineer</h4>
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