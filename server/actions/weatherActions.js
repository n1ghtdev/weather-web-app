import fetch from 'node-fetch';
import { API_KEY, GOOGLE_API_KEY } from '../config/apiKey';

const WEATHER_API = 'https://api.darksky.net/forecast/';
const IP_INDENTIFY_API = 'http://ip-api.com/';
const LOCATION_API = 'https://maps.googleapis.com/maps/api/geocode/';

// filter data for weather API
const excludeBlocks = ['minutely', 'alerts'];

const getLocationApiUrl = (query) =>
  `${LOCATION_API}json?address=${query}&key=${GOOGLE_API_KEY}`;

const getIPIndentifyApiUrl = (IPAddress) =>
  `${IP_INDENTIFY_API}json/${IPAddress}`;

const getWeatherApiUrl = (lat, lon, exclude) =>
  `${WEATHER_API}${API_KEY}/${lat},${lon}?units=si&exclude=${Array.isArray(exclude) ?
    exclude.join(',') :
    exclude}`;


const validateIPAddress = (IPAddress) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(IPAddress)) {
    return true;
  }
  return false;
};

// location by IP
const getLocationByIP = async (IPAddress) => {
  const isValid = validateIPAddress(IPAddress) || false;

  if (!isValid) {
    return null;
  }

  const requestUrl = getIPIndentifyApiUrl(IPAddress);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

// location by search query
const getLocationByQuery = async (query) => {
  // validation

  const requestUrl = getLocationApiUrl(query);
  const response = await getRequest(requestUrl).then(data => {
    if (data.status === 'OK') {
      return data.results[0].geometry.location;
    }
    return { lat: 0, lng: 0 };
  });
  return response;
};

export const getWeatherForecastByQuery = async (query) => {
  const { lat, lng } = await getLocationByQuery(query).then(data => data);

  const requestUrl = getWeatherApiUrl(lat, lng, excludeBlocks);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

export const getWeatherForecastByIP = async (IPAddress) => {
  const { lat, lon } = await getLocationByIP(IPAddress).then(data => data);

  const requestUrl = getWeatherApiUrl(lat, lon, excludeBlocks);
  const response = await getRequest(requestUrl).then(data => data);
  return response;
};

const getRequest = async (url) => {
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
