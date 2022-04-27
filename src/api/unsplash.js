import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  
//client ID is removed due to security issues.
  headers: {
    
  },
});
