<?
 function getWalkScore($lat, $lon, $address) {
  $address=urlencode($address);
  $url = "http://api.walkscore.com/score?format=json&address=$address";
  $url .= "&lat=$lat&lon=$lon&wsapikey=a00293f0287f26e9b7f3d74b2dfa0a9f";
  $str = @file_get_contents($url);
  return $str;
 }

 $lat = $_GET['lat'];
 $lon = $_GET['lon'];
 $address = stripslashes($_GET['address']);
 $json = getWalkScore($lat,$lon,$address);
 echo $json;
?>