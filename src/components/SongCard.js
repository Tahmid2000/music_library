import React from "react";
import { MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";
import { Link } from "react-router-dom";
class SongCard extends React.Component {
  render() {
    return (
      <div>
        <Link
          to={{
            pathname: `/song/${this.props.titleWithoutFeatures}/${this.props.artist}`,
            state: this.props
          }}
        >
          <MDBRow>
            <MDBCol lg="3">
              <img
                className="img-fluid z-depth-2"
                src={this.props.img}
                alt=""
              />
            </MDBCol>
            <MDBCol lg="5">
              <div className="black-text">
                <h4 className="font-weight-bold mb-3 text-center">
                  {this.props.artist}
                </h4>
              </div>

              <h1 className="font-weight-bold mb-3 p-0">
                <div className="black-text text-center">
                  <strong>{this.props.title}</strong>
                </div>
              </h1>
            </MDBCol>
          </MDBRow>
        </Link>
        <hr className="my-5" />
      </div>
    );
  }
}

export default SongCard;
