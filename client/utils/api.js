const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const apiFetch = async (url, options = {}) => {
  const fullUrl = `${API_BASE_URL}/api${url}`
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  }
  
  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  }
  
  return fetch(fullUrl, config)
}

export default apiFetch