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
/*
exports.getZillowDemographics = function(city, state, callback) {
  var options = {
    url: 'http://www.zillow.com/webservice/GetDemographics.htm?zws-id=' + zillowApiKey + '&state=' + state + '&city=' + city + '&childtype=neighborhood'
  }
  request(options, function(err, res, body) {
    if(err) {
      callback(err, null);
    } else {
      parseString(body, function(err, obj) {
        console.log('Demographics', body);
        callback(null, obj['Demographics:demographics'].response[0].list[0].region);
      });
    }
  });
}
*/

//get reverse geocoding (address) given lat and long
exports.getStreetAddress = function(lat, lng) {
  this.reverseGeocoder(lat, lng)
    .then(function(addressObj) {
      console.log('****ADDRESS OBJECT RETURNED ******', addressObj);

  });
}

exports.reverseGeocoder = function(lat, lng) {
  var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + googleMapsApiKey;
  request(geocodeUrl, function(error, response, body) {
    if (error) {
     console.log('Error for url:', geocodeUrl)
   };
    if ( !error && response.statusCode == 200 ) {
      response.json(body);
      console.log(response.json(body));
    } else {
      console.log('Not Available');
    }
  }).then(function(streetAddress) {
    console.log('********reverseGeocoder*********');
    if (streetAddress.status === 'OK') {
      var addressBits = streetAddress.results[0].formatted_address.split(', ');
      var addressObj = { formatted_address: streetAddress.results[0].formatted_address }
      var country = addressBits.pop();
      if (country === 'USA') {
        var stateZip = addressBits.pop().split(' ');
        var state = stateZip[0];
        var zip = stateZip[1];
        var city = addressBits.pop();

        addressObj.country = country;
        addressObj.state = state;
        addressObj.city = city;
        addressObj.zip = zip;
      }
      callback(null, addressObj);
    }
  })
}

//WalkScore requires an address in order to get back walkability scores for each neighborhood
//Need to find reverse geocoding API in order to get the address from currently
//pulled latitude and longitude from the Zillow API
exports.getWalkScore = function(city, state, latitude, longitude, address, callback) {
  var options = {
    url: 'http://api.walkscore.com/score?format=json&address=1119%8th%20Avenue%20Seattle%20WA%2098101&lat=47.6085&lon=-122.3295&transit=1&bike=1&wsapikey=' + walkScoreApiKey
  }


}