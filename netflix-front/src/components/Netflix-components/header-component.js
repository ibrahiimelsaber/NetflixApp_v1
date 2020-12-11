/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header-component.css";

let Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a>
          <img id="logo" src="./logo.png" alt="Logo Image" />
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active ">
            <Link to="/" className="nav-link text-white " href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movies" className="nav-link text-white ">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addMovie" className="nav-link text-white">
              Add Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="updateMovie" className="nav-link text-white">
              Update Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deleteMovie" className="nav-link text-white">
              Delete Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link text-white">
              Blog
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="/blogHooks" className="nav-link text-white">
              Blog With Hooks
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hooks" className="nav-link text-white">
              Hooks
            </Link>
          </li>
        </ul>
        <nav className="sub-nav ml-3">
          <a href="https://www.linkedin.com/in/ibrahimelsaber/" className="nav-item text-white font-weight-bold">
            Ibrahim Elsaber
          </a>
        </nav>
      </nav>
    </div>
  );
};

export default withRouter(Header);
