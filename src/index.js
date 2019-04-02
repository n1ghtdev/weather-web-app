import '@babel/polyfill';
import './styles/index.scss';

const MOUNT_NODE = document.getElementById('app');

// x-forwarded-for is set to actual ip address because localhost returns [::1]
const getIP = async () => {
  const response = await fetch('/api/geolocation', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'x-forwarded-for': '79.110.129.229',
    },
  });

  await response.json().then(data => console.log(data));



  // await request.json().then(data => console.log(data));
};

window.addEventListener('DOMContentLoaded', getIP);
// document.querySelector('.form_button').addEventListener('click', getIP);

