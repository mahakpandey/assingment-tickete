import React, { useState } from "react";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import RightArrowIcon from "../../icons/RightArrowIcon";
import BestSellerIcon from "../../icons/BestSellerIcon";
import { images } from "../../data/ImageData";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <div className="best-seller-icon-div">
        <BestSellerIcon/>
      </div>
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img
              className="carousel-img"
              src={img.image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <div className="left-icon-div" onClick={handlePrevious}>
          <LeftArrowIcon />
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? "dot active" : "dot"}
            ></span>
          ))}
        </div>
        <div className="right-icon-div" onClick={handleNext}>
          <RightArrowIcon/>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
