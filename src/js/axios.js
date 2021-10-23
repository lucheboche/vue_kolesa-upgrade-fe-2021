import axios from 'axios';

const token = 'rhhrmjvdvcv0ka4e6ouao9a1gj42fbjim5bcu60f';

const config = axios.create({
  baseURL: 'https://api.json-generator.com/templates/',
  timeout: 5000,
  headers: { Authorization: `Bearer ${token}` },
});

export default config;
