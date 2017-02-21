//xml parser -- converts xml to JS object
var parseString = require('xml2js').parseString;
var request = require('request');

var zillowApiKey = process.env.ZILLOW_API_KEY;

exports.getZillowHoods = function(city, state, callback) {
  var options = {
    url: 'http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=' + zillowApiKey + '&state=' + state + '&city=' + city + '&childtype=neighborhood'
  }
  request(options, function(err, res, body) {
    if(err) {
      callback(err, null);
    } else {
      parseString(body, function(err, obj) {
        callback(null, obj['RegionChildren:regionchildren'].response[0].list[0].region);
      });
    }
  });
}