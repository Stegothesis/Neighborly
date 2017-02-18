export default function addReview (state = {}, action) {
  switch (action.type) {
    case 'addReview':
      return state['id'] = action;
  }
    default:
      return state
  }
}

