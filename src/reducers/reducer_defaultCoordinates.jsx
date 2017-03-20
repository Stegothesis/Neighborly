import { DEFAULT_COORDINATES } from '../constants/actionTypes.jsx'

export default function (state = null, action){
  switch(action.type) {
  case 'DEFAULT_COORDINATES':
    return action.payload;
  }
  return state;
}