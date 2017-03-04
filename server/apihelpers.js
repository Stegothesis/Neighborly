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

exports.getZillowDemographics = function(neighborhood, city, callback) {
   var options = {
    url: 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id=' + zillowApiKey + '&neighborhood=' + neighborhood + '&city=' + city
  }
  request(options, function(err, res, body) {
    if(err) {
      callback(err, null);
    } else {
      parseString(body, function(err, obj) {
        console.log('***ZILLOW DEMOGRAPHICS***', obj);
        var response = obj['Demographics:demographics'].response;
        if (response) {
          callback(null, obj['Demographics:demographics'].response[0].pages[0].page[2].tables[0].table[0].data[0].attribute);
        } else {
          callback(null, "Call Lmit Exceeded");
        }
      });
    }
  });
}

//WalkScore requires an address in order to get back walkability scores for each neighborhood
//Need to find reverse geocoding API in order to get the address from currently
//pulled latitude and longitude from the Zillow API
exports.getWalkScore = function(lat, lon, address, callback) {
  let options = {
    url: 'http://api.walkscore.com/score?format=xml&address=' + address + '&lat=' + lat + '&lon=' + lon + '&transit=1&bike=1&wsapikey=' + walkScoreApiKey
    }
    request(options, function(error, response, body) {
      if (error) {
        callback(error, null);
      } else {
        parseString(body, function(err, obj) {
          console.log('WALKSCORE', obj);
          var response = {};
          if (obj.result.walkscore) {
            response.walkscore = obj.result.walkscore[0];
            response.description = obj.result.description[0];
          }
          if (response) {
            callback(null, response);
          } else {
            callback(null, "no walkscore found for this neighborhood");
          }
        })
      }
    })

}