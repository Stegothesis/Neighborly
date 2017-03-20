export function sendZillowDemographics(demographics) {
  return {
    type: 'ZILLOW_DEMOGRAPHICS',
    payload: demographics
  };
 }