import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID uxYCcDzl5qhUkoc1nurvE-VdjaHPyes-BrpS_PF1gFA',
  },
});
