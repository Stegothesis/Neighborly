export default function (state = null, action){
  console.log('SELECTED NEIGHBORHOOD STUFF', action);
  switch(action.type) {
  case 'NEIGHBORHOOD_SELECTED':
    return action.payload;
  }

  return state;
}