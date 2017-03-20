//xml parser -- converts xml to JS object
var parseString = require('xml2js').parseString;
var request = require('request');

var zillowApiKey = 'X1-ZWz1fnqmwi7h8r_2qbsp';
var walkScoreApiKey = 'a00293f0287f26e9b7f3d74b2dfa0a9f';
var googleMapsApiKey = 'AIzaSyB3MxTDD5TiQstVaEBdEzndHtIlerKbvfM';
var googlePhotoApiKey = 'AIzaSyB3MxTDD5TiQstVaEBdEzndHtIlerKbvfM';


exports.getZillowHoods = function(city, state, callback) {
  var options = {
    url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + zillowApiKey + '&state=' + state + '&city=' + city + '&childtype=neighborhood'
  }
  request(options, function(err, res, body) {
    if(err) {
      callback(err, null);
    } else {
      parseString(body, function(err, obj) {
        var response = obj['RegionChildren:regionchildren'].response;
        if (response) {
          if (response[0].list[0].region) {
            callback(null, response[0].list[0].region);
          } else {
            callback(new Error("No neighborhoods found"), null);
          }
        } else {
          callback(new Error("City not found"), null);
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
        var response = obj['Demographics:demographics'].response;
        if (response) {
          if (obj['Demographics:demographics'].response[0].pages[0].page[2]) {
            callback(null, obj['Demographics:demographics'].response[0].pages[0].page[2].tables[0].table[0].data[0].attribute);
          } else {
            callback(new Error("Demographics info not found"), null);
          }
        } else {
          callback(new Error("Demographics info not found"), null);
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
          var response = {};
          if (obj.result.walkscore) {
            response.walkscore = obj.result.walkscore[0];
            response.description = obj.result.description[0];
          }
          if (response) {
            callback(null, response);
          } else {
            callback(new Error("no walkscore found for this neighborhood"), null);
          }
        })
      }
    })
}


exports.getAmenities = function(lat, lon, callback) {
  let amenitiesObj = {};
  let radius = 1000;
  let types = 'airport|atm|bank|beauty_salon|book_store|cafe|car_rental|convenience_store|fire_station|food|gas_station|grocery_or_supermarket|gym|hospital|laundry|library|pharmacy|post_office|school|spa|store|subway_station|train_station|veterinary_care|amusement_park|aquarium|art_gallery|bar|bowling_alley|casino|movie_theatre|museum|night_club|park|restaurant|shopping_mall|stadium|university|zoo';
  const append = function(amenitiesArray) {
    for (let i = 0; i < amenitiesArray.length; i++) {
      let amenity = amenitiesArray[i];
        amenitiesObj[amenity.name] = amenitiesObj[amenity.name] || amenity;
    }
  }
  let options = {
    url: 'https://maps.googleapis.com/maps/api/place/search/xml?location=' + lat + ',' + lon + '&radius=' + radius + '&types=' + types + '&key=' + googleMapsApiKey
  }
  request(options, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      parseString(body, function(err, obj) {
        var response = {};
        if (obj.PlaceSearchResponse) {
          response.amenities = obj.PlaceSearchResponse.result;
        }
        if (response) {
          callback(null, response);
        } else {
          callback(new Error("No amenities found for this neighborhood"), null);
        }
      });
    }
  })
}

exports.getGooglePhotos = function (lat, lon, callback) {
  var options = {
    url: "https://maps.googleapis.com/maps/api/place/nearbysearch/xml?location=" + lat + "," + lon + "&radius=1000&key=" + googleMapsApiKey
    }

    request(options, function(error, response, body) {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        parseString(body, function(error, obj) {
          if (error) {
            console.log(error);
          } else {
            var urlArr = [];
            for (var i = 0; i < 3; i++) {
              if (typeof obj.PlaceSearchResponse.result !== 'undefined') {
                if (typeof obj.PlaceSearchResponse.result[i].photo !== 'undefined') {
                  if (typeof obj.PlaceSearchResponse.result[i].photo[0].photo_reference !== 'undefined') {
                    urlArr.push("https://maps.googleapis.com/maps/api/place/photo?photoreference=" + obj.PlaceSearchResponse.result[i].photo[0].photo_reference[0] + "&maxheight=200&maxwidth=300" + "&key=" + googleMapsApiKey);
                  }
                }
              }
            }
            if (urlArr === null || urlArr === undefined) {
              urlArr = [];
            }
            callback(null, urlArr);
          }
        });
      }
    });
};