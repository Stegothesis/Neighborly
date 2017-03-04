export function sendZillowDemographics(demographics) {
  console.log('ZILLOW DEMOGRAPHICS', demographics);
  return {
    type: 'ZILLOW_DEMOGRAPHICS',
    payload: demographics
  };
 }