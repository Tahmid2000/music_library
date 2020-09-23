import axios from "axios";

export default axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/search",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_DEEZER_API_KEY,
    useQueryString: true
  }
});
