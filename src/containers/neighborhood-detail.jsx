import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx'

class NeighborhoodDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    if (!this.props.activeNeighborhood) {
      return <div></div>;
    }
    return (
      <section id="feature" >
        <div className="container">
           <div className="center wow fadeInDown">
            <h1 className="neighborhood-font">Details for: {this.props.activeNeighborhood.name}</h1>
            <GoogleMap />

            <div className="row">
              <div className="features">

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-star"></i>
                    <p className="neighborhood-header">Overall Rating</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_star_rating * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-home"></i>
                    <p className="neighborhood-header">Average Home Price</p>
                    <h3 className="neighborhood-font">{this.props.activeNeighborhood.homePrice}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-star-o"></i>
                    <p className="neighborhood-header">User Ratings</p>
                    <h3 className="neighborhood-font">{this.props.activeNeighborhood.total_num_ratings} reviews</h3>
                  </div>
                </div>



                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-street-view"></i>
                    <p className="neighborhood-header">Sense of Community</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_sense_of_community * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-heart"></i>
                    <p className="neighborhood-header">Good for Singles</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_singles_friendly * 10) / 10}</h3>
                  </div>
                </div>


                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-child"></i>
                    <p className="neighborhood-header">Kid-Friendly</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_kid_friendly * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-hourglass-half"></i>
                    <p className="neighborhood-header">Good for Retirees</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_retirees * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-glass"></i>
                    <p className="neighborhood-header">Entertainment</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_entertainment * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-moon-o"></i>
                    <p className="neighborhood-header">Nightlife</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_nightlife * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-paint-brush"></i>
                    <p className="neighborhood-header">Culture and Arts</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_culture_arts * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-graduation-cap"></i>
                    <p className="neighborhood-header">Schools</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_schools * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-exclamation-triangle"></i>
                    <p className="neighborhood-header">Safety</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_safety * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-hospital-o"></i>
                    <p className="neighborhood-header">Amenities</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_ameneties * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-beer"></i>
                    <p className="neighborhood-header">Hipster Factor</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_hipster_rating * 10) / 10}</h3>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                  <div className="feature-wrap">
                    <i className="fa fa-usd"></i>
                    <p className="neighborhood-header">Affordability</p>
                    <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_affordability * 10) / 10}</h3>
                  </div>
                </div>

              </div>
            </div>
            <ReviewSubmit />
          </div>
        </div>
      </section>
    );
      <div>
        <GoogleMap />
        <h3>Details for: </h3>
        <div>
          {this.props.activeNeighborhood.name} <br/>
          Average Home Price: {this.props.activeNeighborhood.homePrice} <br/>
          Walkability: <br/>
          User Ratings: <br/>
          {this.props.activeNeighborhood.total_num_ratings} reviews <br/>
          Overall: {Math.round(this.props.activeNeighborhood.avg_star_rating * 10) / 10} <br/>
          Sense of Community: {Math.round(this.props.activeNeighborhood.avg_sense_of_community * 10) / 10} <br/>
          Good for Singles: {Math.round(this.props.activeNeighborhood.avg_singles_friendly * 10) / 10} <br/>
          Kid-Friendly: {Math.round(this.props.activeNeighborhood.avg_kid_friendly * 10) / 10} <br/>
          Good for Retirees: {Math.round(this.props.activeNeighborhood.avg_retirees * 10) / 10} <br/>
          Entertainment: {Math.round(this.props.activeNeighborhood.avg_entertainment * 10) / 10} <br/>
          Nightlife: {Math.round(this.props.activeNeighborhood.avg_nightlife * 10) / 10} <br/>
          Culture and Arts: {Math.round(this.props.activeNeighborhood.avg_culture_arts * 10) / 10} <br/>
          Schools: {Math.round(this.props.activeNeighborhood.avg_schools * 10) / 10} <br/>
          Safety: {Math.round(this.props.activeNeighborhood.avg_safety * 10) / 10} <br/>
          Amenities: {Math.round(this.props.activeNeighborhood.avg_ameneties * 10) / 10} <br/>
          Hipster Factor: {Math.round(this.props.activeNeighborhood.avg_hipster_rating * 10) / 10} <br/>
          Affordability: {Math.round(this.props.activeNeighborhood.avg_affordability * 10) / 10} <br/>
        </div>
        <ReviewSubmit />
      </div>
      );
  }
}

function mapStateToProps(state) {
//Whatever is returned here will show up as props inside of BookList Container
  return {
    activeNeighborhood: state.activeNeighborhood,
    walkScores: state.walkScores
  };
}


export default connect(mapStateToProps)(NeighborhoodDetail);