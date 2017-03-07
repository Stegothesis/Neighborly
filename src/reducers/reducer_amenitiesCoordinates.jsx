export default function (state = null, action){
  console.log('AMENITIES COORDINATES', action);
  switch(action.type) {
  case 'AMENITIES_COORDINATES':
    return action.payload;
  }
  return state;
}