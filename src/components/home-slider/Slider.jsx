import React from "react";
import { CAlert, CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import slide1 from '../../assets/sk-pic1.jpg'
import './slider.css';

const Slider = () => {
  return (
    <div className="wid">
      <CCarousel controls indicators>
        <CCarouselItem slider-img >
          <CImage className="d-block w-100 slider-img" src={slide1} alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem slider-img>
          <CImage className="d-block w-100  slider-img" src={slide1} alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem slider-img>
          <CImage className="d-block w-100 slider-img" src={slide1} alt="slide 3" />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Slider;
