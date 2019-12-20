import fetch from 'node-fetch';
import { API_KEY, GEOCODING_API_KEY } from '../config/apiKey';

const WEATHER_API = 'https://api.darksky.net/forecast/';
const IP_INDENTIFY_API = 'http://ip-api.com/';
const LOCATION_API = `https://eu1.locationiq.com/v1/search.php?key=${GEOCODING_API_KEY}`;
//limit=1
// resp =>  [{lat,lon}] or {lat,lon}
// filter data for weather API
const excludeBlocks = ['minutely', 'alerts'];

const getLocationApiUrl = query =>
  `${LOCATION_API}&q=${query}&format=json&limit=1`;

const getIPIndentifyApiUrl = IPAddress =>
  `${IP_INDENTIFY_API}json/${IPAddress}`;

const getWeatherApiUrl = (lat, lon, exclude) =>
  `${WEATHER_API}${API_KEY}/${lat},${lon}?units=si&exclude=${
    Array.isArray(exclude) ? exclude.join(',') : exclude
  }`;

const validateIPAddress = IPAddress => {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      IPAddress,
    )
  ) {
    return true;
  }
  return false;
};

// location by IP
const getLocationByIP = async IPAddress => {
  const isValid = validateIPAddress(IPAddress) || false;

  if (!isValid) {
    return null;
  }

  const requestUrl = getIPIndentifyApiUrl(IPAddress);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

// location by search query
const getLocationByQuery = async query => {
  const requestUrl = getLocationApiUrl(query);
  try {
    const response = await getRequest(requestUrl);

    if (response) {
      return { lat: response[0].lat, lng: response[0].lon };
    }
  } catch (e) {
    console.error(e.message);
    return { lat: 0, lng: 0 };
  }
};

export const getWeatherForecastByQuery = async query => {
  const { lat, lng } = await getLocationByQuery(query).then(data => data);

  const requestUrl = getWeatherApiUrl(lat, lng, excludeBlocks);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

export const getWeatherForecastByIP = async IPAddress => {
  const { lat, lon } = await getLocationByIP(IPAddress).then(data => data);

  const requestUrl = getWeatherApiUrl(lat, lon, excludeBlocks);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

const getRequest = async url => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return await response.json();
  } catch (e) {
    throw new Error(e.message);
  }
};
