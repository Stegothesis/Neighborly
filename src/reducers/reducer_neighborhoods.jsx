import { GET_NEIGHBORHOOD_DATA } from '../constants/actionTypes.jsx'

export default function (state = [], action){
  switch(action.type) {
  case GET_NEIGHBORHOOD_DATA:
    return action.payload;
  }
  return state;
}