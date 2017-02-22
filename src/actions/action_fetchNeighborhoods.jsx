import axios from 'axios';
const API_KEY = 'b9a024ac606815d82344b74139b895b1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchNeighborhoods(neighborhoods) {
  const url = `${ROOT_URL}&q=${neighborhoods},us`;
  const request = axios.get(url);
  return {
    type: FETCH_NEIGHBORHOODS,
    payload: request
  };
}
