import axios from "axios";
export default axios.create({
  baseURL: "https://api.genius.com",
  params: {
    access_token: process.env.REACT_APP_GENIUS_SONGS_API_KEY
  }
});
