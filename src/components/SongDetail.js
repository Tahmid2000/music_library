import React from "react";
import axios from "axios";
import Video from "./Video";
import Lyrics from "./Lyrics";
import deezer from "../apis/deezer";
import { MDBContainer, MDBIcon } from "mdbreact";
import SongByThisArtist from "./SongsByThisArtist";
import AlbumOnDetail from "./AlbumOnDetail";
import "./SongDetail.css";
//open /Applications/Google\ Chrome.app --args --user-data-dir="/var/tmp/Chrome dev session" --disable-web-security

class SongDetail extends React.Component {
  state = {
    title: "",
    artist: "",
    url: "",
    songDetail: [],
    artistDetail: [],
    albumDetail: []
  };
  componentDidMount() {
    this.getData(
      `${this.props.match.params.title} ${this.props.match.params.artist}`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== "" && prevState.artist !== "") {
      if (
        prevState.title !== this.props.match.params.title ||
        prevState.artist !== this.props.match.params.artist
      ) {
        this.getData(
          `${this.props.match.params.title} ${this.props.match.params.artist}`,
          `${this.props.match.params.title}`
        );
      }
    }
  }

  getData = async (term, title) => {
    let response = await deezer.get("", {
      params: {
        q: term
      }
    });
    let songData = response.data.data[0];
    if (typeof songData === "undefined") {
      let newResponse = await deezer.get("", {
        params: {
          q: this.props.match.params.title
        }
      });
      songData = newResponse.data.data[0];
    }
    if (typeof songData !== "undefined") {
      this.setState({
        songDetail: songData,
        albumDetail: songData["album"],
        artistDetail: songData["artist"]
      });
    }
    this.setState({
      title: this.props.match.params.title,
      artist: this.props.match.params.artist
    });
  };

  render() {
    return (
      <React.Fragment>
        <header className="masthead">
          <div className="d-flex justify-content-center">
            <p className="masthead-intro">
              <strong>{this.props.match.params.artist}</strong>
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <h1 className="masthead-heading">
              <strong>{this.props.match.params.title}</strong>
            </h1>
          </div>
        </header>
        <MDBContainer>
          <div className="mt-5"></div>
          <Video
            title={this.props.match.params.title}
            artist={this.props.match.params.artist}
            id={this.state.id}
          />
          <hr />
          <Lyrics
            title={this.props.match.params.title}
            artist={this.props.match.params.artist}
            url={this.state.url}
          />
          <AlbumOnDetail albumID={this.state.albumDetail.id} />
          <SongByThisArtist
            artistID={this.state.artistDetail.id}
            curTitle={this.props.match.params.title}
          />
        </MDBContainer>
      </React.Fragment>
    );
  }
}
/* <Video
            title={this.props.match.params.title}
            artist={this.props.match.params.artist}
            id={this.state.id}
          />; */
export default SongDetail;
