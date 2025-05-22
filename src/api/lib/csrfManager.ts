import axios from 'axios';

// Cache for storing the CSRF token to avoid multiple requests
let cachedCsrfToken: string | null = null;

// Promise to handle concurrent requests for CSRF token
let csrfTokenPromise: Promise<string> | null = null;

/**
 * Retrieves a CSRF token from the API or cache.
 * Implements a singleton pattern to prevent multiple concurrent requests.
 * 
 * @returns {Promise<string>} The CSRF token
 * @throws {Error} If the token cannot be retrieved
 */
export async function getCsrfToken(): Promise<string> {
  // Return cached token if available
  if (cachedCsrfToken) return cachedCsrfToken;

  // If there's no ongoing request, create a new one
  if (!csrfTokenPromise) {
    csrfTokenPromise = axios
      .get(`${import.meta.env.VITE_PUBLIC_API_URL}/auth/csrf-token`, { withCredentials: true })
      .then(response => {
        const token = response.data.csrfToken;
        if (!token) throw new Error('Failed to get CSRF token');
        cachedCsrfToken = token;
        csrfTokenPromise = null;
        return token;
      })
      .catch(err => {
        csrfTokenPromise = null; 
        throw err;
      });
  }

  return csrfTokenPromise;
}

/**
 * Clears the cached CSRF token.
 * Should be called when the token becomes invalid or after logout.
 */
export function clearCsrfToken() {
  cachedCsrfToken = null;
}
