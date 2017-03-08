export function sendGooglePhoto(url) {
  console.log('Google photo url', url);
  return {
    type: 'GOOGLE_PHOTO',
    payload: url
  };
 }