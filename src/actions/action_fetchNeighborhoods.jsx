import $ from 'jquery';
import axios from 'axios';
export const GET_NEIGHBORHOOD_DATA = 'GET_NEIGHBORHOOD_DATA';

export function fetchNeighborhoodData(response) {
  return {
    type: GET_NEIGHBORHOOD_DATA,
    payload: response
  }
}

export function getNeighborhoodData(neighborhoods) {
  const url = '/api/neighborhoods/searchbycity/austin/tx';
  const request = axios.get(url).then(function(response) {
     return {
      type: GET_NEIGHBORHOOD_DATA,
      payload: response
     }
  });
}





