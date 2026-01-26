const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_API_URL
    : 'http://52.66.210.240:3001/api';

export default API_BASE_URL;
