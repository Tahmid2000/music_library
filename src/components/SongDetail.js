import React from "react";
import Video from "./Video";
import Lyrics from "./Lyrics";
import deezer from "../apis/deezer";
import { MDBContainer, MDBIcon } from "mdbreact";
import SongByThisArtist from "./SongsByThisArtist";
import AlbumOnDetail from "./AlbumOnDetail";
import { Link } from "react-router-dom";
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
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== "" && prevState.artist !== "") {
      if (
        prevState.title !== this.props.match.params.title ||
        prevState.artist !== this.props.match.params.artist
      ) {
        this.getData(
          `${this.props.match.params.title} ${this.props.match.params.artist}`
        );
        window.scrollTo(0, 0);
      }
    }
  }

  getData = async term => {
    let response = await deezer.get("", {
      params: {
        q: term
      }
    });
    let songData = [];
    if (typeof response !== "undefined") songData = response.data.data[0];
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
        <Link to="/" exact="true">
          <div className="back-arrow">
            <MDBIcon icon="arrow-left" />
          </div>
        </Link>
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
        <MDBContainer style={{ backgroundColor: "white" }}>
          <div className="mt-5"></div>
          <Video
            title={this.props.match.params.title}
            artist={this.props.match.params.artist}
          />
          <hr />
          <Lyrics
            title={this.props.match.params.title}
            artist={this.props.match.params.artist}
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
