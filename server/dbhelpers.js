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
            vote_count: 0,
          }
        })
        .spread(function(review, created) {
          callback(null, created);
          if (created) {
            db.Neighborhood.findById(neighborhoodId)
            .then(function(hood) {

              var oldTotal = parseFloat(hood.total_num_ratings);
              var oldKid = parseFloat(hood.kid_friendly_ratings);
              var oldSingle = parseFloat(hood.singles_friendly_ratings);
              var oldRetirees = parseFloat(hood.retirees_ratings);
              var oldSense = parseFloat(hood.sense_of_community_ratings);
              var oldEntertainment = parseFloat(hood.entertainment_ratings);
              var oldNightlife = parseFloat(hood.nightlife_ratings);
              var oldAffordability = parseFloat(hood.affordability_ratings);
              var oldAmenities = parseFloat(hood.ameneties_ratings);
              var oldSafety = parseFloat(hood.safety_ratings);
              var oldCulture = parseFloat(hood.culture_arts_ratings);
              var oldSchools = parseFloat(hood.schools_ratings);
              var oldCrime = parseFloat(hood.crime_ratings);
              var oldHipster = parseFloat(hood.hipster_ratings);

              neighborhood.updateAttributes({
                total_num_ratings: oldTotal + 1,
                avg_star_rating: review.stars_overall ? findNewAverage(oldTotal, hood.avg_star_rating, review.stars_overall) : hood.avg_star_rating,
                avg_kid_friendly: review.kid_friendly ? findNewAverage(oldKid, hood.avg_kid_friendly, review.kid_friendly) : hood.avg_kid_friendly,
                avg_singles_friendly: review.singles_friendly ? findNewAverage(oldSingle, hood.avg_singles_friendly, review.singles_friendly) : hood.avg_singles_friendly,
                avg_retirees: review.retirees ? findNewAverage(oldRetirees, hood.avg_retirees, review.retirees) : hood.avg_retirees,
                avg_sense_of_community: review.sense_of_community ? findNewAverage(oldSense, hood.avg_sense_of_community, review.sense_of_community) : hood.avg_sense_of_community,
                avg_nightlife: review.nightlife ? findNewAverage(oldNightlife, hood.avg_nightlife, review.nightlife) : hood.avg_nightlife,
                avg_entertainment: review.entertainment ? findNewAverage(oldEntertainment, hood.avg_entertainment, review.entertainment) : hood.avg_entertainment,
                avg_affordability: review.affordability ? findNewAverage(oldAffordability, hood.avg_affordability, review.affordability) : hood.avg_affordability,
                avg_ameneties: review.ameneties ? findNewAverage(oldAmenities, hood.avg_ameneties, review.ameneties) : hood.avg_ameneties,
                avg_safety: review.safety ? findNewAverage(oldSafety, hood.avg_safety, review.safety) : hood.avg_safety,
                avg_culture_arts: review.culture_arts ? findNewAverage(oldCulture, hood.avg_culture_arts, review.culture_arts) : hood.avg_culture_arts,
                avg_schools: review.schools ? findNewAverage(oldSchools, hood.avg_schools, review.schools) : hood.avg_schools,
                avg_crime: review.crime ? findNewAverage(oldCrime, hood.avg_crime, review.crime) : hood.avg_crime,
                avg_hipster_rating: review.hipster_rating ? findNewAverage(oldHipster, hood.avg_hipster_rating, review.hipster_rating) : hood.avg_hipster_rating,
                kid_friendly_ratings: review.kid_friendly ? hood.kid_friendly_ratings + 1 : hood.kid_friendly_ratings,
                singles_friendly_ratings: review.singles_friendly ? hood.singles_friendly_ratings + 1 : hood.singles_friendly_ratings,
                retirees_ratings: review.retirees ? hood.retirees_ratings + 1 : hood.retirees_ratings,
                sense_of_community_ratings: review.sense_of_community ? hood.sense_of_community_ratings + 1 : hood.sense_of_community_ratings,
                nightlife_ratings: review.nightlife ? hood.sense_of_community_ratings + 1 : hood.sense_of_community_ratings,
                affordability_ratings: review.affordability ? hood.affordability_ratings + 1 : hood.affordability_ratings,
                ameneties_ratings: review.ameneties ? hood.ameneties_ratings + 1 : hood.ameneties_ratings,
                safety_ratings: review.safety ? hood.safety_ratings + 1 : hood.safety_ratings,
                culture_arts_ratings: review.culture_arts ? hood.culture_arts_ratings + 1 : hood.culture_arts_ratings,
                schools_ratings: review.schools ? hood.schools_ratings + 1 : hood.schools_ratings,
                crime_ratings: review.crime ? hood.crime_ratings + 1 : hood.crime_ratings,
                hipster_ratings: review.hipster_rating ? hood.hipster_ratings + 1 : hood.hipster_ratings,
                entertainment_ratings: review.entertainment ? hood.entertainment_ratings + 1 : hood.entertainment_ratings
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
    if (created) {
      db.Review.findById(reviewId)
      .then(function(review) {
        var voteVal;
        positiveVote ? voteVal = 1 : voteVal = -1;
        review.updateAttributes({
          vote_count: review.vote_count + voteVal
        }, ['vote_count']).then(function() {
          callback(null, created)
        })
      })
    } else {
      callback(null, created);
    }
  })
  .catch(function(err) {
    callback(err, null);
  })
}

