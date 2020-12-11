/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./card-component.css";
// import { withRouter } from 'react-router-dom'

const Card = () => {
  const [movies, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:8080/api/movies/getAllMovies");
      setTimeout(() => {
        setData(result.data);
        setIsLoading(false);
      }, 3000);
    })();
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          {" "}
          <img src="/images/loading.gif" />
          Movies is Loading 😊 Please Be Patient ...{" "}
        </div>
      ) : (
        <>
          {movies.map((movie) => {
            return (
              <div className="col-lg-3" key={Math.random() * 20}>
                <div className="card">
                  <img src="/images/freeze.jpg" className="img-fluid mb-3 w-auto" alt="" />
                  <input type="button" value="Watch Now" />
                  <h6>
                    {movie.name} - <span>{movie.duration} </span>hours
                  </h6>
                  <h6>
                    {movie.star} -<span>{movie.category}</span>
                  </h6>{" "}
                  <h6 className="h6-bg">
                    <img src="/images/rating.gif" className="ratingImage" />
                    <span>{movie.rating}</span>/10 IMDb
                  </h6>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default withRouter(Card);
