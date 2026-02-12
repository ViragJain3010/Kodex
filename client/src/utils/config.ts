const API_BASE_URL: string =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api';

export default API_BASE_URL;
