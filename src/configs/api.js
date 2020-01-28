const axios = require('axios');

const Api = axios.create({
  baseURL: "https://localhost:3333/",
});

module.exports = Api;
