import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
class SongCard extends React.Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: `/song/${this.props.title}/${this.props.artist}`,
            state: this.props
          }}
        >
          <MDBRow>
            <MDBCol lg="3"></MDBCol>
            <MDBCol lg="6">
              <img
                className="img-fluid z-depth-2"
                src={this.props.img}
                alt=""
              />
              <div className="d-flex justify-content-center">
                <div className="black-text">
                  <h4 className="font-weight-bold mt-3 text-center">
                    {this.props.artist}
                  </h4>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h1 className="font-weight-bold p-0">
                  <div className="black-text text-center">
                    <strong>{this.props.title}</strong>
                  </div>
                </h1>
              </div>
              <div style={{ marginBottom: "-35px" }}></div>
            </MDBCol>
            <MDBCol lg="3"></MDBCol>
          </MDBRow>
        </Link>
        <hr className="my-5" />
      </div>
    );
  }
}

export default SongCard;
