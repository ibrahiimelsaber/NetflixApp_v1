import React from "react";
import { withRouter } from "react-router-dom";
import "./add-movie-component.css";
import CarouselComponent from "./carousel-component";

let updateMovie = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-lg-5">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Movie ID</label>
                </div>
                <input type="text" className="form-control" id="movieID" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Movie Name</label>
                </div>
                <input type="text" className="form-control" id="movieName" />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Movie Category</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Romance">Romance</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Movie Duration</label>
                </div>
                <input type="number" className="form-control" id="movieDuration" />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <label className="input-group-text">Movie Star</label>
                </div>
                <input type="text" className="form-control" id="movieStar" />
              </div>

              <div className="form-group border p-3">
                <label for="movieImage" className="text-info">
                  Upload Movie Image
                </label>
                <input type="file" className="form-control-file" id="movieImage" />
              </div>
              <div className="form-group border p-2">
                <button type="submit" className="btn  btn-primary mr-2">
                  Update Movie
                </button>
                <button className="btn  btn-primary">Show Movies</button>
              </div>
            </form>
          </div>
          <div className="offset-1 col-lg-5">
            <CarouselComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(updateMovie);
