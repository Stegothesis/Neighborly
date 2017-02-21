/*
export default function addReview (state = {}, action) {
  switch (action.type) {
    case 'addReview':
      return state['id'] = action;
  }
    default:
      return state
  }
}
*/

export default function () {
  return [
  { review: 'This is a customer review' },
  { review: 'This is a second customer review'}
  ]
}


