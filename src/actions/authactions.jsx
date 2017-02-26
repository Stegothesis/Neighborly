export function updateLoggedInStatus(user) {
  return {
    type: 'UPDATE_LOGIN_STATUS',
    payload: user
  }
}