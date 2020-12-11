/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router-dom";
import "./footer-component.css";

let Footer = () => {
  return (
    <section className="link footer">
      <div className="logos d-flex justify-content-start footer-text">
        <a href="#">
          <i className="fab fa-facebook-square fa-2x logo"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram fa-2x logo"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter fa-2x logo"></i>
        </a>
        <a href="#">
          <i className="fab fa-youtube fa-2x logo"></i>
        </a>
      </div>
      <div className="sub-links ">
        <ul>
          <li>
            <a href="#">Audio and Subtitles</a>
          </li>
          <li>
            <a href="#">Audio Description</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
        </ul>
        <footer>
          {" "}
          <small>
            &copy; Copyright 2020{" "}
            <a className="text-blue" href="https://www.linkedin.com/in/ibrahimelsaber/">
              Ibrahim Elsaber
            </a>
          </small>{" "}
        </footer>
      </div>
    </section>
  );
};

export default withRouter(Footer);
