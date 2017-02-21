var db = require('./schemas.js');

exports.createUser = function(user, callback) {
  db.user.findOrCreate({where: {username: user.username}, defaults: {hash: user.hash}})
  .spread(function(user, created) {
    callback(created);
  })
}

exports.addReview = function(review, callback) {
  var defaults = {
    text: review.text
    stars_overall: review.stars_overall,
    id_locations: review.id_locations,
    id_users: review.id_users,
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
    vote_count: review.vote_count
  }
  //checks to see if a neighborhood exists, adds it if not
  var neighborhoodId;
  db.Neighborhood.findOrCreate({
    where: {
      city: review.city,
      state: review.state
    }
  })
  .spread(function(neighborhood, created) {
    neighborhoodId = neighborhood.id;
    //find userid based on hash
    db.User.findOne({where: {hash: review.hash})
    .then(function(user) {
      //find if user has already reviewed the neighborhood
      db.Review.findOrCreate({
        where: {
          user_id: user.id,
          neighborhood_id: neighborhoodId
        },
        defaults: defaults
      })
      .then(function(review, created) {
        if(!created) {
          review.updateAttributes(defaults)
        }
      })
    })
  })
}

