import fetch from 'node-fetch';
import { API_KEY, GOOGLE_API_KEY } from '../config/apiKey';
//fc9aa22a639f1e190be9c1a6f92e8c80/37.8267,-122.4233
const API_URL = 'https://api.darksky.net/forecast/';
const API_LOCATION_URL = 'http://ip-api.com/';
const API_LOCATION_LL_URL = 'https://maps.googleapis.com/maps/api/geocode/';

const getApiLocationLLURL = (query) => {
  return `${API_LOCATION_LL_URL}json?address=${query}&key=${GOOGLE_API_KEY}`;
};

const getApiLocationURL = (ipAddress) => {
  return `${API_LOCATION_URL}json/${ipAddress}`;
};

const getApiResponseURL = (lat, lon, exclude) => {
  return `${API_URL}${API_KEY}/${lat},${lon}?exclude=${Array.isArray(exclude) ? exclude.join(',') : exclude}`;
};

const validateIPAddress = (ipAddress) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
    return true; 
  }   
  return false;
};

const blocks = ['currently', 'minutely', 'hourly', 'daily', 'alerts', 'flags'];

const getLatLonByIP = async (ipAddress) => {
  const isValid = validateIPAddress(ipAddress) || false;

  if (!isValid) {
    return null;
  }

  const url = getApiLocationURL(ipAddress);

  return await getRequest(url).then(data => data);
};

export const getLatLonByCity = async (query) => {
  // validation

  const url = getApiLocationLLURL(query);

  return await getRequest(url).then(data => {
    if (data.status === 'OK') {
      return data.results[0].geometry.location;
    } else {
      return { lat: 0, lng: 0 };
    }
  });
};
// TODO: OVER HERE //
const getLocation = async () => {

  // const { lat, lng } = await getLatLonByCity(query).then(data => data);
  
  // const { lat, lon: lng } = await getLatLonByIP(ip).then(data => data);

};

export const getCurrentWeather = async (ip) => {
  
  const { lat, lon } = await getLatLonByIP(ip).then(data => data);

  const exclude = blocks.filter(key => key !== 'currently');
  const url = getApiResponseURL(lat, lon, exclude);

  return await getRequest(url).then(data => data);
};

export const getHourlyForecast = async () => {
  const exclude = blocks.filter(key => key !== 'hourly');
  const url = getApiResponseURL(50, 30, exclude);

  return await getRequest(url).then(data => data);
};

export const getDailyForecast = async () => {
  const exclude = blocks.filter(key => key !== 'daily');
  const url = getApiResponseURL(50, 30, exclude);

  return await getRequest(url).then(data => data);
};






// accu weather actions

// const API_LOCATION_URL = 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress';
// const API_12H_FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/';
// const API_5D_FORECAST_URL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
// const API_LOCATION_SEARCH_URL = 'http://dataservice.accuweather.com/locations/v1/cities/search';

// const getApiLocationURL = (ip) => {
//   return `${API_LOCATION_URL}?apikey=${API_KEY}&q=${ip}`;
// };

const getApi12hForecastURL = (locationKey) => {
  return `${API_12H_FORECAST_URL}${locationKey}?apikey=${API_KEY}&details=true`;
};

const getApi5dForecastURL = (locationKey) => {
  return `${API_5D_FORECAST_URL}${locationKey}?apikey=${API_KEY}&details=true`;
};

const getApiLocationSearchURL= (query) => {
  return `${API_LOCATION_SEARCH_URL}?apikey=${API_KEY}&q=${query}`;
};



const getLocationKey = async (ipAddress) => {
  const isValid = validateIPAddress(ipAddress) || false;

  if (!isValid) {
    return null;
  }

  const url = getApiLocationURL(ipAddress);

  return await getRequest(url).then(data => data.Key);
};

const getLocationKeyBySearchQuery = async (query) => {
  // isValid
  console.log(query);
  const url = getApiLocationSearchURL(query);
  console.log(url);
  return await getRequest(url).then(data => {
    console.log(data);
    return data;
  });
};

export const get12HourForecastByIP = async (ipAddress) => {
  
  const key = await getLocationKey(ipAddress).then(data => data);
  const url = getApi12hForecastURL(key);

  return await getRequest(url).then(data => data);
};

export const get5DayForecastByIP = async (ipAddress) => {

  const key = await getLocationKey(ipAddress).then(data => data);
  const url = getApi5dForecastURL(key);

  return await getRequest(url).then(data => data);
};

export const get12HourForecast = async (query) => {
  
  const key = await getLocationKeyBySearchQuery(query).then(data => data);
  const url = getApi12hForecastURL(key);

  return await getRequest(url).then(data => data);
};

export const get5DayForecast = async (query) => {

  const key = await getLocationKeyBySearchQuery(query).then(data => data);
  const url = getApi5dForecastURL(key);

  return await getRequest(url).then(data => data);
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
    console.warn(e.message);
  }
};