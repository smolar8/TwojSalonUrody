import React from "react";
import "./stylePhotoTeam/photoTeam.css";

import { REACT_APP_URLM } from "../../../constants/api.js";

const PhotoTeam = () => {
  return (
    <div className="wrapper--div">
      <div className="teamPhotos">
        <img
          className="teamPhotos--img1"
          src={`${REACT_APP_URLM}/img/team/team1.jpg`}
          alt="photo2"
        />
      </div>
      <div className="teamPhotos">
        <img
          className="teamPhotos--img2"
          src={`${REACT_APP_URLM}/img/team/team2.jpg`}
          alt="photo2"
        />
      </div>
    </div>
  );
};

export default PhotoTeam;
