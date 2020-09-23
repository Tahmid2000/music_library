import React from "react";
import SongCard from "./SongCard";
import { MDBCard, MDBCardBody } from "mdbreact";

class SongList extends React.Component {
  render() {
    const renderedList = this.props.songs.map(song => {
      return (
        <SongCard
          key={song.result.id}
          theURL={song.result.url}
          title={song.result.title_with_featured}
          titleWithoutFeatures={song.result.title}
          artist={song.result.primary_artist.name}
          img={song.result.song_art_image_url}
          artistImg={song.result.primary_artist.image_url}
          id={song.result.id}
        />
      );
    });
    return <React.Fragment>{renderedList}</React.Fragment>;
  }
}

export default SongList;
