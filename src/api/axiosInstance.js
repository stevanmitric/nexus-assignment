import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://new.api.nexusautotransport.com/api/vehicles',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
