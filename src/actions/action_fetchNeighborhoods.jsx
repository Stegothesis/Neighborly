import $ from 'jquery';
import axios from 'axios';
export const GET_NEIGHBORHOOD_DATA = 'GET_NEIGHBORHOOD_DATA';
import thunk from 'redux-thunk';

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


/*
export const getNeighborhoodData = neighborhood => (dispatch) =>
  $.ajax({
    type: 'GET',
    url: '/api/neighborhoods/searchbycity/austin/tx',
    success: function(data) {
      var nameData = data.map(function(neighborhoods) {
          return {"name": neighborhoods.name[0]};
        })
      console.log('Get Neighborhood Data Success!', nameData);
      return {
        type: 'GET_NEIGHBORHOOD_DATA',
        payload: data.map(function(neighborhoods) {
          return {"name": neighborhoods.name[0]};
        })
      }
    },
    error: function(error) {
      console.log('Error: Get Neighborhood Data Failed', error);
    },
    contentType: 'application/json',
    dataType: 'json'
  });
*/





