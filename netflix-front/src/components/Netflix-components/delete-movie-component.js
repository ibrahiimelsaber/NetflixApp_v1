import React from "react";
import { withRouter } from "react-router-dom";
import "./add-movie-component.css";
import CarouselComponent from "./carousel-component";

let DeleteMovie = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-5 mt-6">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" id="movieID" placeholder="Movie ID" />
              </div>
              <div className="form-group border">
                <button type="submit" className="btn form-control btn-danger">
                  Delete Movie
                </button>
              </div>
            </form>
          </div>
          <div className="offset-1 col-lg-5 mb-2">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DeleteMovie);
