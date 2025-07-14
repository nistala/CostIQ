import axios from 'axios';

//const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://costiq-api.onrender.com/api/' //Dev URL;
//const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3003/api/';
const BASE_URL = process.env.REACT_APP_BASE_URL || `${window.origin}/api`;
console.log(BASE_URL,"line 6");

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});
apiClient.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authToken")) ;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const get = (url, config = {}) => {
  return apiClient.get(url, config);
};

const _delete = (url, config = {}) => {
  return apiClient.delete(url, config);
};

const put = (url, data = {}, config = {}) => {
  return apiClient.put(url, data, config);
};

const post = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
};

// Export API methods
export {get,post,put,_delete};