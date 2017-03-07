var db = require('../database/schemas.js');

//adds a new user
exports.createUser = function(user, callback) {
  db.User.findOrCreate({where: {username: user.username}, defaults: {hash: user.hash}})
  .spread(function(user, created) {
    callback(user, created);
  })
}

//adds a review of a neighborhood, adding the neighborhood to the DB if it doesn't exist
exports.addReview = function(review, userId, callback) {

  var findNewAverage = function(oldNumRatings, oldAverage, newRating) {
    return (oldAverage * oldNumRatings + newRating) / (oldNumRatings + 1);
  }

  //checks to see if a neighborhood exists, adds it if not
  var neighborhoodId;
  db.Neighborhood.findOrCreate({
    where: {
      city: review.city,
      state: review.state,
      neighborhood_name: review.name
    }
  })
  .spread(function(neighborhood, created) {
    neighborhoodId = neighborhood.id;
    // db.User.findOne({where: {hash: userHash}})
      // .then(function(user) {
        //find if user has already reviewed the neighborhood; don't let them review twice
        db.Review.findOrCreate({
          where: {
            userId: userId,
            neighborhoodId: neighborhoodId
          },
          defaults: {
            text: review.text,
            stars_overall: review.stars_overall,
            kid_friendly: review.kid_friendly,
            singles_friendly: review.singles_friendly,
            retirees: review.retirees,
            sense_of_community: review.sense_of_community,
            nightlife: review.nightlife,
            entertainment: review.entertainment,
            affordability: review.affordability,
            ameneties: review.ameneties,
            safety: review.safety,
            culture_arts: review.culture_arts,
            schools: review.schools,
            crime: review.crime,
            hipster_rating: review.hipster_rating,
            vote_count: 0
          }
        })
        .spread(function(review, created) {
          callback(created);
          if (created) {
            db.Neighborhood.findById(neighborhoodId)
            .then(function(hood) {
              var oldNum = parseFloat(hood.total_num_ratings);
              neighborhood.updateAttributes({
                total_num_ratings: oldNum + 1,
                avg_star_rating: findNewAverage(oldNum, hood.avg_star_rating, review.stars_overall),
                avg_kid_friendly: findNewAverage(oldNum, hood.avg_kid_friendly, review.kid_friendly),
                avg_singles_friendly: findNewAverage(oldNum, hood.avg_singles_friendly, review.singles_friendly),
                avg_retirees: findNewAverage(oldNum, hood.avg_retirees, review.retirees),
                avg_sense_of_community: findNewAverage(oldNum, hood.avg_sense_of_community, review.sense_of_community),
                avg_nightlife: findNewAverage(oldNum, hood.avg_nightlife, review.nightlife),
                avg_entertainment: findNewAverage(oldNum, hood.avg_entertainment, review.entertainment),
                avg_affordability: findNewAverage(oldNum, hood.avg_affordability, review.affordability),
                avg_amenities: findNewAverage(oldNum, hood.avg_amenities, review.ameneties),
                avg_safety: findNewAverage(oldNum, hood.avg_safety, review.safety),
                avg_culture_arts: findNewAverage(oldNum, hood.avg_culture_arts, review.culture_arts),
                avg_schools: findNewAverage(oldNum, hood.avg_schools, review.schools),
                avg_crime: findNewAverage(oldNum, hood.avg_crime, review.crime),
                avg_hipster_rating: findNewAverage(oldNum, hood.avg_hipster_rating, review.hipster_rating),
                avg_safety: findNewAverage(oldNum, hood.avg_safety, review.safety),
              })
            })
          }
        });
      });
};

//gets all reviews for a given neighborhood
exports.getReviews = function(query, callback) {
  db.Neighborhood.findOne({
    where: query,
    include: [{
      model: db.Review,
      include: [{
        model: db.User,
        attributes: ['username']
      }]
    }]
  })
  .then(function(hood) {
    if(!hood) {
      callback("Not Found");
    } else {
      callback(hood.reviews);
    }
  });
  //catch?
};

//gets all the information in the neighborhood table
exports.getNeighborhoodData = function(query, callback) {
  db.Neighborhood.findOne({where: query})
  .then(function(hood) {
    callback(hood);
  });
};

exports.addVote = function(positiveVote, reviewId, userId, callback) {
  db.Vote.findOrCreate({
    where: {
      reviewId: reviewId,
      userId: userId
    }
  })
  .spread(function(vote, created) {
      db.Review.findById(reviewId)
      .then(function(review) {
        var voteVal;
        positiveVote ? voteVal = 1 : voteVal = -1;
        review.updateAttributes({
          vote_count: review.vote_count + voteVal
        }, ['vote_count']).then(function() {
          callback(created);
        })
      })
  });
}

