const Sequelize = require('sequelize');

const db = new Sequelize('community', 'root',
  define: {
    charset: 'utf8mb4'
  }
);

 var Users = db.define('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {type: Sequelize.STRING, unique: true},
    hash: Sequelize.STRING,
  });

 var Reviews = db.define('reviews', {
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

 var Neighborhoods = db.define('neighborhoods', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    neighborhood_name: Sequelize.STRING,
    avg_star_rating: Sequelize.INTEGER,
    total_num_ratings: Sequelize.INTEGER,
    average_kid_friendly: Sequelize.INTEGER,
    avg_singles_friendly: Sequelize.INTEGER,
    avg_retirees: Sequelize.INTEGER,
    avg_sense_of_community: Sequelize.INTEGER,
    avg_nightlife: Sequelize.INTEGER,
    avg_entertainment: Sequelize.INTEGER,
    avg_affordability: Sequelize.INTEGER,
    avg_ameneties: Sequelize.INTEGER,
    avg_safety: Sequelize.INTEGER,
    avg_culture_arts: Sequelize.INTEGER,
    avg_schools: Sequelize.INTEGER,
    avg_crime: Sequelize.INTEGER,
    avg_hipster_rating: Sequelize.INTEGER,
    city: Sequelize.STRING,
    state: Sequelize.STRING
  });
  
 var Votes = db.define('Votes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
   }
 });

Users.belongToMany(Reviews, {through: 'Votes'});
Reviews.belongToMany(Users, {through: 'Votes'});

//Create teables in sql if does not exist
db.sync(); 

exports.sequelize = db;
exports.Users = Users;
exports.Reviews = Reviews;
exports.Neighborhoods = Neighborhoods;
exports.Votes = Votes;
