import React from 'react';

const Team = () => {
  return (
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
                <h4><span>-Renata Maraj /</span>  Software Engineer</h4>
                <a href="https://github.com/renatavmaraj" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/renatamaraj/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/michiang" target="_blank">
                  <img src="images/profile/michael.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>-Michael Chiang /</span>  Software Engineer</h4>
                <a href="https://github.com/michiang" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/michael-chiang-b68603117/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bchasset" target="_blank">
                  <img src="images/profile/brian.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>-Brian Hassett /</span>  Software Engineer</h4>
                <a href="https://github.com/bchasset" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/bhassett/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

            <div className="col-md-3 wow fadeInDown">
              <div className="clients-comments text-center">
                <a href="https://github.com/bruce-graham" target="_blank">
                  <img src="images/profile/bruce.jpg" className="img-circle" alt="" />
                </a>
                <h4><span>-Bruce Graham /</span>  Software Engineer</h4>
                <a href="https://github.com/bruce-graham" target="_blank"><i className="fa fa-github fa-3x"></i></a><br />
                <a href="https://www.linkedin.com/in/brucegraham11/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a>
              </div>
            </div>

         </div>
        </div>
    </section>
  );
}

module.exports = Team;