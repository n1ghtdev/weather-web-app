const keywords = {
  'clear-day': {
    url: 'https://cdn.allwallpaper.in/wallpapers/2400x1350/11755/beach-blue-sky-2400x1350-wallpaper.jpg',
    pos: '0 35%',
    background: 'rgb(58, 91, 110)',
    blurred: true,
  },
  'clear-night': {
    url: 'https://i.imgur.com/Jfbzwle.jpg',
    pos: '0 0',
    background: 'rgb(115, 139, 151)',
    blurred: false,
  },
  rain: {
    url: 'https://img3.goodfon.ru/original/1920x1080/6/8e/makro-gorod-dozhd.jpg',
    pos: '0 0',
    background: 'rgb(40, 86, 112)', 
    blurred: true,
  },
  snow: {
    url: 'https://i.imgur.com/mYd9Zl7.jpg',
    pos: '0 5%',
    background: 'rgb(76, 91, 100)',
    blurred: false,
  },
  sleet: {
    url: 'https://i.imgur.com/4PmwlyU.jpg',
    pos: '0 0',
    background: 'rgb(90, 115, 130)',
    blurred: true,
  },
  wind: {
    url: 'https://healygroup.com/wp-content/uploads/2018/11/windy-weather.jpg',
    pos: '75% 40%',
    background: 'rgb(76, 91, 100)',
    blurred: true,
  },
  fog: {
    url: 'https://i.imgur.com/62dq3u5.jpg',
    pos: '0 37%',
    background: 'rgb(107, 118, 124)',
    blurred: false,
  },
  'partly-cloudy-day': {
    url: 'https://i.imgur.com/8mztctL.jpg',
    pos: '0 60%',
    background: 'rgb(74, 80, 83)',
    blurred: true,
  },
  'partly-cloudy-night': {
    url: '',
    pos: '0 0',
    background: '',
    blurred: true,
  },
  thunderstorm: {
    url: '',
    pos: '0 0',
    background: '',
    blurred: true,
  },
  cloudy: {
    url: 'https://external-preview.redd.it/F9vP-EFbe8SR0VJsbvioGki9nuVOhv3sz8U1M2GWBkU.jpg?auto=webp&s=0fd6104457f4f8ad2800451c0e6d6ac7285026a5',
    pos: '0 0',
    background: 'rgb(138, 153, 161)',
    blurred: false,
  },
};

const getImageByWeather = (name) => keywords[name];

export default getImageByWeather;
