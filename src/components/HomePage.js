import React from "react";
import SearchBar from "./SearchBar";
import SongList from "./SongList";
import deezer from "../apis/deezer";
import { MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";

class HomePage extends React.Component {
  state = { songs: [] };
  onSearchSubmit = async term => {
    let response = await deezer.get("", {
      params: {
        q: term
      }
    });
    this.setState({ songs: response.data.data });
  };
  render() {
    return (
      <div id="parallaxintro">
        <MDBView
          src={
            "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
          fixed
        >
          <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%" }}
          >
            <MDBRow>
              <MDBCol md="12" className="mb-4 white-text text-center">
                <h1 className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">
                  Sound
                  <span className="black-text font-weight-bold">Garden</span>
                </h1>
                <hr className="hr-light my-4" />
                <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold">
                  All your music needs in one place
                </h5>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <main>
          <MDBContainer>
            <MDBRow className="py-5">
              <MDBCol md="12" className="text-center">
                <MDBContainer>
                  <SearchBar onSubmit={this.onSearchSubmit} />
                </MDBContainer>
                <div className="mx-3">
                  {typeof this.state.songs === "undefined" ? (
                    ""
                  ) : this.state.songs.length ? (
                    <SongList songs={this.state.songs} />
                  ) : (
                    ""
                  )}
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default HomePage;
