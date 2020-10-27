import React, { useEffect, useState } from "react";
import axios from "axios";
import SongTile from "./SongTile";
const SongsByThisArtist = ({ artistID, curTitle }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistID}/top?limit=10`
      );
      if (typeof response !== "undefined") setSongs(response.data.data);
    };
    getData();
  }, [artistID]);
  if (typeof songs !== "undefined" && songs.length) {
    const renderedList = songs.map(song => {
      if (song.title !== curTitle) {
        return (
          <React.Fragment key={song.id}>
            <div className="d-flex justify-content-center">
              <SongTile
                key={song.id}
                title={song.title}
                artist={song.artist.name}
                img={song.album.cover_small}
              />
            </div>
          </React.Fragment>
        );
      }
    });

    return (
      <div>
        <strong>
          <h3 className="text-center">More From This Artist</h3>
        </strong>
        <br />
        {renderedList}
        <hr />
      </div>
    );
  }

  return <div></div>;
};

export default SongsByThisArtist;
