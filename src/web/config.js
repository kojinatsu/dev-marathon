const config = {
  apiUrl:
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? 'http://localhost:5642'
      : '/api_na-kojima'
};

export default config;
