export function updateLoggedInStatus(user) {
  console.log('update dis shit')
  return {
    type: 'UPDATE_LOGIN_STATUS',
    payload: user
  }
}