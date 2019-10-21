import axios from 'axios';
const KEY = 'AIzaSyBtw5CwINVtHePDCIyNhdKv6-l91U88NgY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})