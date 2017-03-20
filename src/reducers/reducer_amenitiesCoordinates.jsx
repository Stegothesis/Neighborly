export default function (state = null, action){
  switch(action.type) {
  case 'AMENITIES_COORDINATES':
    return action.payload;
  }
  return state;
}