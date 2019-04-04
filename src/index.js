import '@babel/polyfill';
import './styles/index.scss';

const MOUNT_NODE = document.getElementById('app');
const searchForm = document.getElementById('search-form');
const sfButton = searchForm.querySelector('button');
const sfInput = searchForm.querySelector('input');

const typesOptions = {
  valuesType: 'c',
  toggleValuesType() {
    if (typesOptions.valuesType === 'c') {
      typesOptions.valuesType = 'f';
    } else if (typesOptions.valuesType === 'f') {
      typesOptions.valuesType = 'c';
    } else {
      return null;
    }
    cacheOptions();
  },
  updateValue(value) {
    if (!(Number(value))) {
      return null;
    }
  
    if (typesOptions.valuesType === 'c') {
      return Math.round((value - 32) * 5/9);
    } else if (typesOptions.valuesType === 'f') {
      return Math.round(value * 9/5 + 32);
    } else {
      return null;
    }
  }
};

const cacheOptions = () => {
  if (!localStorage.getItem('valuesType')) {
    localStorage.setItem('valuesType', typesOptions.valuesType);
  } else {
    localStorage.removeItem('valuesType');
    localStorage.setItem('valuesType', typesOptions.valuesType);
  }
};

const currentWeatherData = {
  temperature: null,
  summary: null,
  timezone: null,
  apparentTemp: null,
  windSpeed: null,
  visibility: null,
  pressure: null,
  humidity: null,
  dewPoint: null,
  time: null,
};

const convertUNIXtoDate = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${fixMinutes(minutes)}`;
};

const renderCurrentWeather = (dataObject) => {
  if (!dataObject) {
    return;
  }

  // console.log(Object.keys(dataObject).filter(key => key !== 'options'));
  const { updateValue } = typesOptions;
  setTextContentByID('temperature', updateValue(dataObject.temperature));
  setTextContentByID('apparent-temp', updateValue(dataObject.apparentTemp));
  setTextContentByID('wind-speed', dataObject.windSpeed);
  setTextContentByID('visibility', dataObject.visibility);
  setTextContentByID('pressure', dataObject.pressure);
  setTextContentByID('humidity', dataObject.humidity);
  setTextContentByID('dew-point', dataObject.dewPoint);
  setTextContentByID('summary', dataObject.summary);
  setTextContentByID('timezone', dataObject.timezone);
  setTextContentByID('update-time', convertUNIXtoDate(dataObject.time));
  
};

const setTextContentByID = (el, content) => {
  if (typeof el === 'string' && content) {
    document.getElementById(el).textContent = content;
  }
  return null;
};

function fixMinutes(m) {
  return (m < 10) ? '0' + m.toString() : m.toString();
}

// x-forwarded-for is set to actual ip address because localhost returns [::1]
const getHourlyForecast = async () => {
  const response = await fetch('/api//forecast/hourly-onload', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-forwarded-for': '79.110.129.229',
    },
  });

  await response.json().then(data => {
    console.log(data);
    const { currently } = data;

    const updatedData = {
      ...currentWeatherData,
      temperature: currently.temperature,
      summary: currently.summary,
      timezone: data.timezone,
      apparentTemp: currently.apparentTemperature,
      windSpeed: currently.windSpeed,
      visibility: currently.visibility,
      pressure: currently.pressure,
      humidity: currently.humidity,
      dewPoint: currently.dewPoint,
      time: currently.time,
    };
    console.log(updatedData);
    renderCurrentWeather(updatedData);
  });

  // cache on page load, TODO: move it from here
  cacheOptions();
};

const getFullForecast = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/forecast/hourly-search', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ query: sfInput.value }),
  });

  await response.json().then(data => console.log(data));
};


sfButton.addEventListener('click', getFullForecast)
window.addEventListener('DOMContentLoaded', getHourlyForecast);
// document.querySelector('.form_button').addEventListener('click', getIP);
