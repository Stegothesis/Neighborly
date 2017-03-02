//xml parser -- converts xml to JS object
var parseString = require('xml2js').parseString;
var request = require('request');

var zillowApiKey = 'X1-ZWz1fnqmwi7h8r_2qbsp';
var walkScoreApiKey = 'a00293f0287f26e9b7f3d74b2dfa0a9f';
var googleMapsApiKey = 'AIzaSyDh4nd5J3XJwQvcz_Iz88A2hgHcFRJ3K3k';

exports.getZillowHoods = function(city, state, callback) {
  var options = {
    url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + zillowApiKey + '&state=' + state + '&city=' + city + '&childtype=neighborhood'
  }
  request(options, function(err, res, body) {
    if(err) {
      callback(err, null);
    } else {
      parseString(body, function(err, obj) {
        console.log('what do we get back from zillow?', obj);
        var response = obj['RegionChildren:regionchildren'].response;
        if (response) {
          callback(null, response[0].list[0].region);
        } else {
          callback(null, "no neighborhoods found");
        }
      });
    }
  });
}

//WalkScore requires an address in order to get back walkability scores for each neighborhood
//Need to find reverse geocoding API in order to get the address from currently
//pulled latitude and longitude from the Zillow API
exports.getWalkScore = function(latitude, longitude, address, callback) {
  let walkUrl = 'http://api.walkscore.com/score?format=json&address=' + address + '&lat=' + latitude + '&lon=' + longitude + '&wsapikey=' + walkScoreApiKey;
  request(walkUrl, function(error, response, body) {
    if (error) {
      console.log('Error for:', walkUrl)
    };
    if (!error && response.statusCode === 200) {
      console.log(response.json(body));
    }
  })

}