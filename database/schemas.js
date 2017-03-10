const Sequelize = require('sequelize');
const pg = require('pg');
let DB_URL = "";

// if (process.env.NODE_ENV === 'production') {
//   DB_URL = process.env.DATABASE_URL;
//   const db = new Sequelize(DB_URL + '?&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory');
// } else {
// }

// pg.defaults.ssl = true;

// const db = new Sequelize(DB_URL + '?&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory');

// use for local dev
var db = new Sequelize('postgres://skmmagucfbqhlq:e438af7378349f775519a13e692c6fa52b76d7d55a314626f812009c64a98247@ec2-174-129-41-23.compute-1.amazonaws.com:5432/d1cppdr8vn1427', {
  dialect: "postgres"
});

// db.sync({
//     force: true
// });

db.authenticate()
  .then((err) => {
    console.log('Database connected');
  }, (err) => {
    console.log('Error: cannot connect to database: ', err);
  });

 var User = db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {type: Sequelize.STRING, unique: true},
    hash: Sequelize.STRING,
  });

 var Review = db.define('review', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: Sequelize.STRING,
    stars_overall: Sequelize.INTEGER,
    kid_friendly: Sequelize.INTEGER,
    singles_friendly: Sequelize.INTEGER,
    retirees: Sequelize.INTEGER,
    sense_of_community: Sequelize.INTEGER,
    nightlife: Sequelize.INTEGER,
    entertainment: Sequelize.INTEGER,
    affordability: Sequelize.INTEGER,
    ameneties: Sequelize.INTEGER,
    safety: Sequelize.INTEGER,
    culture_arts: Sequelize.INTEGER,
    schools: Sequelize.INTEGER,
    crime: Sequelize.INTEGER,
    hipster_rating: Sequelize.INTEGER,
    vote_count: Sequelize.INTEGER
  });

 var Neighborhood = db.define('neighborhood', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    neighborhood_name: Sequelize.STRING,
    avg_star_rating: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    total_num_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_kid_friendly: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    kid_friendly_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_singles_friendly: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    singles_friendly_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_retirees: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    retirees_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_sense_of_community: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    sense_of_community_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_nightlife: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    nightlife_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_entertainment: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    entertainment_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_affordability: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    affordability_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_ameneties: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    ameneties_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_safety: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    safety_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_culture_arts: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    culture_arts_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_schools: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    schools_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_crime: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    crime_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    avg_hipster_rating: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    hipster_ratings: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    city: Sequelize.STRING,
    state: Sequelize.STRING
  });

 var Vote = db.define('vote', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
   }
 });

Review.belongsTo(Neighborhood);
Neighborhood.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

Vote.belongsTo(User);
User.hasMany(Vote);

Vote.belongsTo(Review);
Review.hasMany(Vote);

//Create teables in sql if does not exist
db.sync();

exports.sequelize = db;
exports.User = User;
exports.Review = Review;
exports.Neighborhood = Neighborhood;
exports.Vote = Vote;
