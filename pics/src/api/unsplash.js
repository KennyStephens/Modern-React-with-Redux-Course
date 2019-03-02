import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 22d217e0ebeba6b679983d65ae35473c2f216302d4b37fd6536149742b80e34a'
  }
});