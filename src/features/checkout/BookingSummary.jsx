import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "../../styles/BookingSummary.css";

const BookingSummary = () => {
  return (
    <div>
      <div className="confirm-sub-heading-div">
        <p className="confirm-sub-heading">Confirm & pay</p>
      </div>
      <div className="sidebar-box">
        <div className="upper-div">
        <div className="gallery-div">
          <Carousel />
        </div>
        <div className="view-payment-div"></div>
        </div>
        <div className="lower-div"></div>
      </div>
    </div>
  );
};

export default BookingSummary;
