const Sequelize = require('sequelize');

const db = new Sequelize('community', 'root, '', {
  define: {
    charset: 'utf8mb4'
  }
});

var Users = db.define('User', {

});

var Comments = db.define('Comments', {

});

var Locations = db.define('Locations', {

});

db.sync();

exports.sequelize = db;
