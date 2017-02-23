/*
export default function () {
  return [
  { name: 'Downtown', population: '1 million'},
  { name: 'South Congress', population: '4 million'},
  { name: 'Hyde Park', population: '2 million'},
  { name: 'East Austin', population: '10 million'},
  { name: 'Mueller', population: '3 million'}
  ]
}
*/

import { GET_NEIGHBORHOOD_DATA } from '../constants/actionTypes.jsx'

export default function (state = [], action){
  console.log('This is action:', action);
  switch(action.type) {
  case GET_NEIGHBORHOOD_DATA:
    console.log('action.payload.data', action.payload.data);
    return state.concat([action.payload.data]);
  }
  return state;
}