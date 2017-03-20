export function sendGooglePhoto(url) {
  return {
    type: 'GOOGLE_PHOTO',
    payload: url
  };
 }