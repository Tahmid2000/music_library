import React, { useEffect, useState } from "react";
import axios from "axios";
import SongTile from "./SongTile";
const AlbumOnDetail = ({ albumID }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.deezer.com/album/${albumID}/tracks`
      );
      if (typeof response !== "undefined") setSongs(response.data.data);
    };
    getData();
  }, [albumID]);
  if (typeof songs !== "undefined" && songs.length) {
    const renderedList = songs.map(song => {
      return (
        <SongTile key={song.id} title={song.title} artist={song.artist.name} />
      );
    });
    return (
      <div>
        <strong>
          <h3 className="text-center">Also On This Album</h3>
        </strong>
        <div className="text-center">{renderedList}</div>
        <hr />
      </div>
    );
  }

  return <div></div>;
};

export default AlbumOnDetail;
