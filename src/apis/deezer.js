import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/search",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    useQueryString: true
  }
});
