import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewSubmit from './ReviewSubmit.jsx';
import GoogleMap from './GoogleMap.jsx';
import Amenities from './Amenities.jsx';
import PicModal from '../components/PicModal.jsx';


class NeighborhoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  reviewChecker() {
    console.log(this.state.justReviewed);
    if (!this.props.user.name) {
      return (<div>Please log in to leave a review.</div>)
    } else if (this.props.alreadyReviewed() && !this.state.justReviewed) {
      return (<div>You've already reviewed this neighborhood. Thanks again for your input!</div>)
    }
    return (<ReviewSubmit loadReviewsFromServer={this.props.loadReviewsFromServer} justReviewed={this.justReviewed.bind(this)}/>)
  }

  justReviewed() {
    this.setState({
      justReviewed: true
    })
  }

  render() {

    if (!this.props.activeNeighborhood) {
      return <div></div>;
    }
    return (
      <div>
        <section id="feature" className="transparent-bg">
          <div className="container">
            <div className="center wow fadeInDown">
              <h1 className="neighborhood-font"> {this.props.activeNeighborhood.name} - {this.props.activeNeighborhood.total_num_ratings || '0'} Reviews</h1>
              <p className="neighborhood-font"> {this.props.activeNeighborhood.city.split('-').join(' ')}, {this.props.activeNeighborhood.state}</p>
              <GoogleMap />

              <section className="container">
                <div id="feature">
                  {this.props.googlePhoto &&
                    this.props.googlePhoto.data.map((url, index) => {
                      console.log(url, 'this is url in neighborhood detail------------')
                      var picId = "picModal" + index;
                      return (
                        <div className="neighborhood-photo">
                          <a href="javascript:;" data-toggle="modal" data-target={"#" + picId}><img className="img-circle" src={url}/></a>
                          <PicModal url={url} id={picId}/>
                        </div>
                      )
                    })
                  }
                </div>
              </section>
              <button type="button" className="btn btn-primary btn-lg review-button" data-toggle="modal" data-target="#myModal">Submit A Review!</button>

              <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">

                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Your Review of {this.props.activeNeighborhood.name}</h4>
                    </div>
                    <div className="modal-body">
                      {this.reviewChecker()}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="features pull-right">
                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-star"></i>
                      <p className="neighborhood-header">Overall Rating</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_star_rating * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-home"></i>
                      <p className="neighborhood-header">Average Home Price</p>
                      <h3 className="neighborhood-font">${this.props.activeNeighborhood.homePrice}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-credit-card"></i>
                      <p className="neighborhood-header">Average Income</p>
                      {this.props.zillowDemographics &&
                      <h3 className="neighborhood-font">${this.props.zillowDemographics.income}</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-hourglass"></i>
                      <p className="neighborhood-header">Average Age</p>
                      {this.props.zillowDemographics &&
                      <h3 className="neighborhood-font">{this.props.zillowDemographics.averageAge}</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-blind"></i>
                      <p className="neighborhood-header">Walkability</p>
                      {this.props.walkScores &&
                      <h3 className="neighborhood-font">{this.props.walkScores.walkScore}% - {this.props.walkScores.description}</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-car"></i>
                      <p className="neighborhood-header">Average Commute Time</p>
                      {this.props.zillowDemographics &&
                      <h3 className="neighborhood-font">{this.props.zillowDemographics.averageCommuteTime} min</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-mars"></i>
                      <p className="neighborhood-header">Single Males</p>
                      {this.props.zillowDemographics &&
                      <h3 className="neighborhood-font">{this.props.zillowDemographics.singleMalesPercent}%</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-venus"></i>
                      <p className="neighborhood-header">Single Females</p>
                      {this.props.zillowDemographics &&
                      <h3 className="neighborhood-font">{this.props.zillowDemographics.singleFemalePercent}%</h3>
                      }
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-street-view"></i>
                      <p className="neighborhood-header">Sense of Community</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_sense_of_community * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-heart"></i>
                      <p className="neighborhood-header">Good for Singles</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_singles_friendly * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>


                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-child"></i>
                      <p className="neighborhood-header">Kid-Friendly</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_kid_friendly * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-hourglass-half"></i>
                      <p className="neighborhood-header">Good for Retirees</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_retirees * 10) / 10 || "No votes yet!"} </h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-glass"></i>
                      <p className="neighborhood-header">Entertainment</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_entertainment * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-moon-o"></i>
                      <p className="neighborhood-header">Nightlife</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_nightlife * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-paint-brush"></i>
                      <p className="neighborhood-header">Culture and Arts</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_culture_arts * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-graduation-cap"></i>
                      <p className="neighborhood-header">Schools</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_schools * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-exclamation-triangle"></i>
                      <p className="neighborhood-header">Safety</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_safety * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-hospital-o"></i>
                      <p className="neighborhood-header">Amenities</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_ameneties * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-beer"></i>
                      <p className="neighborhood-header">Hipster Factor</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_hipster_rating * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="600ms">
                    <div className="feature-wrap">
                      <i className="fa fa-usd"></i>
                      <p className="neighborhood-header">Affordability</p>
                      <h3 className="neighborhood-font">{Math.round(this.props.activeNeighborhood.avg_affordability * 10) / 10 || "No votes yet!"}</h3>
                    </div>
                  </div>

                </div>
              </div>
              <button type="button" className="btn btn-primary btn-lg review-button-2" data-toggle="modal" data-target="#myModal">Submit A Review!</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeNeighborhood: state.activeNeighborhood,
    neighborhoods: state.neighborhoods,
    walkScores: state.walkScores,
    zillowDemographics: state.zillowDemographics,
    googlePhoto: state.googlePhoto,
    user: state.user
  };
}

export default connect(mapStateToProps)(NeighborhoodDetail);