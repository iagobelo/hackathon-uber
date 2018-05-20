import axios from 'axios';

const BASE_URL = 'https://medusa.satecnologia.com.br/api/v1/';

export const initApiConfig = () => {
  axios.defaults.baseURL = BASE_URL;
};

export const setApiToken = (token) => {
  axios.defaults.headers.token = token;
};
