import React from "react";
import "./stylePhotoTeam/photoTeam.css";
import Team1 from "../../../img&icon/team/team1.jpg";
import Team2 from "../../../img&icon/team/team2.jpg";

const PhotoTeam = () => {
  return (
    <div className="wrapper--div">
      <div className="teamPhotos">
        <img className="teamPhotos--img1" src={Team1} alt="photo1" />
      </div>
      <div className="teamPhotos">
        <img className="teamPhotos--img2" src={Team2} alt="photo2" />
      </div>
    </div>
  );
};

export default PhotoTeam;
