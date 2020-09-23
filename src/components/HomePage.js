import React from "react";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import genius from "../apis/genius";
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
class HomePage extends React.Component {
  state = { songs: [] };
  onSearchSubmit = async term => {
    const response = await genius.get("/search", {
      params: { q: term }
    });
    this.setState({ songs: response.data.response.hits });
  };

  render() {
    return (
      <React.Fragment>
        <MDBContainer>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </MDBContainer>
        <div className="mx-3">
          {this.state.songs.length ? <SongList songs={this.state.songs} /> : ""}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
