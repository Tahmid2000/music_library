import React, { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const Video = ({ title, artist }) => {
  const [video, setVideo] = useState("");
  useEffect(() => {
    const getVid = async term => {
      const youtubeVid = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      const vidId = youtubeVid.data.items[0].id.videoId;
      setVideo(`https://www.youtube.com/embed/${vidId}`);
    };
    getVid(`${title} ${artist}`);
  }, [title]);

  return (
    <div className="embed-responsive embed-responsive-16by9 z-depth-4">
      <iframe
        className="embed-responsive-item"
        src={video}
        frameBorder="0"
        title={title}
      ></iframe>
      <hr />
    </div>
  );
};

export default Video;
