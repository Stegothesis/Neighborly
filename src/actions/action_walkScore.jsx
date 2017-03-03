export function sendWalkScore(score) {
  console.log('Walk Score Action', score);
  return {
    type: 'WALK_SCORE',
    payload: score
  };
 }