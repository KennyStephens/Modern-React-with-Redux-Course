import axios from 'axios';

const KEY = 'AIzaSyBn12t3K5PatfBGAX9AdRRFD4JGSbgViX8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
