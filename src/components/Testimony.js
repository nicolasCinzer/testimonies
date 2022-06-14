import React from "react";
import "../stylesheets/Testimony.css";

function Testimony(props) {
  return (
    <div className="testimonyContainer">
      <img
        className="testimonyImage"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="Testimony Image"
      />
      <div className="textTestimonyContainer">
        <p className="testimonyName">
          <strong>{props.name}</strong>
        </p>
        <p className="testimonyWork">{props.work}</p>
        <p className="testimonyText">{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;
