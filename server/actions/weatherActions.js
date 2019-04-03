import fetch from 'node-fetch';
import { API_KEY } from '../config/apiKey';

const API_LOCATION_URL = 'http://dataservice.accuweather.com/locations/v1/cities/ipaddress';
//?apikey=KgutvAo9j3wPzHsdG9xdEHbymYHfu2qp&q=179.110.129.229

const getApiLocationURL = (ip) => {
  return `${API_LOCATION_URL}?apikey=${API_KEY}&q=${ip}`;
};

const validateIPAddress = (ipAddress) => {
  if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {  
    return true; 
  }   
  return false;
};

export const getLocationKey = (ipAddress) => {
  const isValid = validateIPAddress(ipAddress) || false;

  if (!isValid) {
    return null;
  }

  const getRequestURL = getApiLocationURL(ipAddress);

  return postRequest(getRequestURL).then(data => data);
};

const postRequest = (url) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then(response => response.json())
    .then(data => data.Key)
    .catch(error => console.log(error));
};