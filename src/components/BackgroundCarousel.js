import React from 'react';
import { Carousel } from 'react-bootstrap';
import fondo1 from '../assets/img/fondo.jpg';
import fondo2 from '../assets/img/fondo2.avif';
import fondo3 from '../assets/img/fondo3.jpg';
import './css/BackgroundCarousel.css';

const BackgroundCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={fondo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fondo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fondo3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BackgroundCarousel;
