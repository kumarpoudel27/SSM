import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://ssm-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network Error:', error.request);
      return Promise.reject({ error: 'Network error occurred' });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Request Error:', error.message);
      return Promise.reject({ error: 'Request error occurred' });
    }
  }
);

// Auth API calls
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const getCurrentUser = () => api.get('/auth/me');

// Monitor API calls
export const getMonitors = () => api.get('/monitors');
export const createMonitor = (monitorData) => api.post('/monitors', monitorData);
export const updateMonitor = (id, monitorData) => api.put(`/monitors/${id}`, monitorData);
export const deleteMonitor = (id) => api.delete(`/monitors/${id}`);
export const getMonitorHistory = (id) => api.get(`/monitors/${id}/history`);

export default api; 