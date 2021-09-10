import React from "react";
import { Carousel } from "react-bootstrap";

import './Slider.css';

import card1 from "../Images/card1.jpg";
import card2 from "../Images/card2.jpg";

const Slider = () => {
  return (
    <div className="slider"  >
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={card1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={card2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={card1} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
