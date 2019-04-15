const defaultHeaders = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'x-forwarded-for': '79.110.129.229',
};

export const getRequest = (url, headers = defaultHeaders) => {
  try {
    return fetch(url, {
      method: 'GET',
      headers,
    });
  } catch (error) {
    throw error.message;
  }
};

export const postRequest = (url, body, headers = defaultHeaders) => {
  try {
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
  } catch (error) {
    throw error.message;
  }
};
