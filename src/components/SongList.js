import React from "react";
import SongCard from "./SongCard";

class SongList extends React.Component {
  render() {
    const renderedList = this.props.songs.map(song => {
      return (
        <SongCard
          key={song.id}
          title={song.title}
          artist={song.artist.name}
          img={song.album.cover_xl}
          id={song.id}
        />
      );
    });
    return <React.Fragment>{renderedList}</React.Fragment>;
  }
}

export default SongList;
