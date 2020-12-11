import React from "react";
import { withRouter } from "react-router-dom";
import Card from "./card-component";
import "./movies-component.css";

let Movies = () => {
  return (
    <div className="container mt-3 h-100">
      <div className="row py-5">
        <Card />
      </div>
    </div>
  );
};

export default withRouter(Movies);
