import { clearCsrfToken, getCsrfToken } from './csrfManager';

import axios from 'axios';

// Create axios instance with default configuration
export const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor: Adds CSRF token to mutation requests
api.interceptors.request.use(async (config) => {
  const method = config.method?.toLowerCase();
  const isMutation = ['post', 'put', 'patch', 'delete'].includes(method || '');

  if (isMutation) {
    try {
      const token = await getCsrfToken();
      config.headers['X-CSRF-Token'] = token;
    } catch (err) {
      console.error('Error fetching CSRF token:', err);
    }
  }

  return config;
});

// Response interceptor: Handles token refresh and CSRF errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;
    const message = error.response?.data?.message?.toLowerCase?.() || '';

    const isRefreshRequest = originalRequest.url?.includes('/auth/refresh');
    const isCsrfRequest = originalRequest.url?.includes('/auth/csrf-token');

    // Case 1: Invalid CSRF token
    const isInvalidCsrf = status === 403 && message.includes('csrf');

    if (isInvalidCsrf && !originalRequest._csrfRetry) {
      originalRequest._csrfRetry = true;

      try {
        clearCsrfToken(); // Clear old token
        const newToken = await getCsrfToken(); // Get new token
        originalRequest.headers['X-CSRF-Token'] = newToken;

        return api(originalRequest); // Retry request
      } catch (csrfError) {
        return Promise.reject(csrfError);
      }
    }

    // Case 2: Expired access token
    if (status === 401 && !originalRequest._authRetry && !isRefreshRequest && !isCsrfRequest) {
      originalRequest._authRetry = true;

      try {
        await api.post('/auth/refresh', {}); // Refresh token
        return api(originalRequest); // Retry request
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
