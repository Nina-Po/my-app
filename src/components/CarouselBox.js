import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/esm/Carousel";
import forestImg from "../assets/forest.jpeg";
import dforestImg from "../assets/dforest.jpeg";
import { CarouselCaption } from "react-bootstrap";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={forestImg} alt="Forest" />
          <CarouselCaption>
            <h3>Forest image</h3>
            <p>lorem ipsum dolor, sit amet ...</p>
          </CarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={dforestImg} alt="DForest" />
          <CarouselCaption>
            <h3>Forest dark image</h3>
            <p>lorem ipsum dolor, sit amet ...</p>
          </CarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={forestImg} alt="Forest" />
          <CarouselCaption>
            <h3>Forest image</h3>
            <p>lorem ipsum dolor, sit amet ...</p>
          </CarouselCaption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
