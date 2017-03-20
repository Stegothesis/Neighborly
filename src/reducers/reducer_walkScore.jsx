import { WALK_SCORE } from '../constants/actionTypes.jsx'

export default function (state = null, action){
  switch(action.type) {
  case WALK_SCORE:
    return action.payload;
  }
  return state;
}