import axios from 'axios';

const axiosinstance = axios.create({
  baseURL: 'https://newscatcher.p.rapidapi.com/v1',
});

axiosinstance.interceptors.request.use(config => {
  config.headers = {
    'X-RapidAPI-Key': '27b0e370b6mshe079838c9a8b376p1b0304jsn3afa749cbc13',
  };
  return config;
});

export default axiosinstance;
