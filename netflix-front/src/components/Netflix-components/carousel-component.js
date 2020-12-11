import React from "react";
import { withRouter } from "react-router-dom";
import Carousel from "../../../node_modules/react-bootstrap/Carousel";
import "./carousel-component.css";

let CarouselComponent = () => {
  return (
    <Carousel className="carousel-style">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src="./images/freeze.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>We love watching movies</h3>
          <p>I wanted it to be you, I wanted it to be you so badly</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="./images/mulan.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>We love watching movies</h3>
          <p>I wanted it to be you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./images/Dolittle.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>We love watching movies</h3>
          <p>I wanted it to be you, I wanted it to be you so badly</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default withRouter(CarouselComponent);
