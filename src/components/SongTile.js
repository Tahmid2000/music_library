import React from "react";
import { Link } from "react-router-dom";
const SongTile = ({ title, artist, img }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <Link
        to={{
          pathname: `/song/${title}/${artist}`
        }}
      >
        <h5 className="font-weight-bold mb-3 p-0">
          <div className="black-text text-center">
            <strong>
              {title} by {artist}
            </strong>
          </div>
        </h5>
      </Link>
    </div>
  );
};

export default SongTile;
