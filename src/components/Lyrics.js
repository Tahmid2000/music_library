import React, { useEffect, useState } from "react";
import { getLyrics } from "genius-lyrics-api";

const Lyrics = ({ title, artist }) => {
  const [lyrics, setLyrics] = useState("Loading...");
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    setFetched(false);
  }, [title]);
  useEffect(() => {
    const options = {
      apiKey: process.env.REACT_APP_GENIUS_LYRICS_API_KEY,
      title: title,
      artist: artist,
      optimizeQuery: true
    };
    getLyrics(options).then(lyrics => {
      setLyrics(lyrics);
      setFetched(true);
    });
  }, [fetched]);
  return (
    <div className="lyrics text-center" style={{ whiteSpace: "pre-wrap" }}>
      {!fetched ? (
        <div>
          <div>
            You may get a CORS block error. To bypass this, you need to disable
            Same-Origin Policy in your browser.
          </div>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        lyrics
      )}
      <hr />
    </div>
  );
};

export default Lyrics;
