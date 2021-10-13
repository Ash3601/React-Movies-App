// import React from "react";

import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import banner from "./assets/banner.jpg";
import kong from "./assets/kong.jpg";
import kong2 from "./assets/kong2.jpg";

export class BootstrapCarousels extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}
            height="400"
            width="100"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kong}
            height="400"
            width="100"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kong2}
            height="400"
            width="100"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default BootstrapCarousels;
