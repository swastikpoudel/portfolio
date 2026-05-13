import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000 // 30 second timeout
});

export const sendContactForm = (data) => api.post('/contact', data);