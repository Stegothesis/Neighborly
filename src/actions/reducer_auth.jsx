import { UPDATE_LOGIN_STATUS } from '../constants/actionTypes.jsx'

export default function (state = {}, action){
  switch(action.type) {
  case UPDATE_LOGIN_STATUS:
    return action.payload;
  }
  return state;
}