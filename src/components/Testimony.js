import React from "react";

function Testimony() {
  return (
    <div className="testimonyContainer">
      <img
        className="testimonyImage"
        src={require("../images/testimony-emma.png")}
        alt="Testimony Image"
      />
      <div className="textTestimonyContainer">
        <p className="testimonyName">Jennifer Karlson</p>
        <p className="testimonyWork">Blockchain Developer</p>
        <p className="testimonyText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor
          odio id viverra porttitor. Duis convallis, ante id varius finibus,
          sapien leo lobortis elit, vitae hendrerit massa neque eget libero. In
          sed lobortis neque, nec gravida massa. Integer ipsum lectus, sodales
          et gravida in, dignissim vel dui.
        </p>
      </div>
    </div>
  );
}

export default Testimony;
