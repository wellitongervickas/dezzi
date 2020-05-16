import Axios from 'axios';
import { getStorage } from 'helpers/session/storage';

const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

client.interceptors.request.use((reqConfig) => {
  const authenticated = getStorage('auth');

  if (authenticated && authenticated.token) {
    // eslint-disable-next-line no-param-reassign
    reqConfig.headers.authorization = `Bearer ${authenticated.token}`;
  }

  return reqConfig;
});

client.interceptors.response.use((res) => res.data, (error) => {
  try {
    return Promise.reject(error.response.data.errors);
  } catch (err) {
    return Promise.reject(err);
  }
});

export default client;
