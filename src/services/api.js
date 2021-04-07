import axios from 'axios';

//https://jsonplaceholder.typicode.com/posts

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

export default api;