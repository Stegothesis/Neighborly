export function sendWalkScore(score) {
  return {
    type: 'WALK_SCORE',
    payload: score
  };
 }