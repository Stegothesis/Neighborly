import { GOOGLE_PHOTO } from '../constants/actionTypes.jsx';

export default function (state = null, action) {
  switch(action.type) {
    case GOOGLE_PHOTO:
      return action.payload;
  }
  return state;
}