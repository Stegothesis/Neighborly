const Sequelize = require('sequelize');
const pg = require('pg');
let DB_URL = "";

// if (process.env.NODE_ENV === 'production') {
//   DB_URL = process.env.DATABASE_URL;
// } else {

// }

// pg.defaults.ssl = true;

// const db = new Sequelize(DB_URL + '?&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory');

var db = new Sequelize("postgres://localhost:5432/community", {
  dialect: "postgres"
});


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
    id_locations: Sequelize.INTEGER,
    id_users: Sequelize.INTEGER,
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
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    average_kid_friendly: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_singles_friendly: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_retirees: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_sense_of_community: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_nightlife: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_entertainment: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_affordability: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_ameneties: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_safety: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_culture_arts: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_schools: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_crime: {
      type: Sequelize.DECIMAL,
      defaultValue: 0
    },
    avg_hipster_rating: {
      type: Sequelize.DECIMAL,
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
