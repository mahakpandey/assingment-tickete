import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "../../styles/BookingSummary.css";
import PlusIcon from "../../icons/PlusIcon";
import RatingStarIcon from "../../icons/RatingStarIcon";
import TicketIcon from "../../icons/TicketIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import ClockIcon from "../../icons/ClockIcon";
import UserIcon from "../../icons/UserIcon";
import PiggyBankIcon from "../../icons/PiggyBankIcon";
import '../../styles/Checkout.css'
import InfoOutlineIcon from "../../icons/InfoOutline";
import LockDarkIcon from "../../icons/LockDarkIcon";

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
            <div className="below-carousel-div">
              <div className="flex flex-column gap-half">
                <div className="flex align gap-1">
                  <div className="flex align gap-1">
                    <RatingStarIcon />
                    <div className="flex align gap-half">
                      <div>
                        <span className="rating">4.9</span>
                      </div>
                      <div>
                        <span className="people">(4.5k)</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="people">•</p>
                  </div>
                  <div>
                    <p className="people">{`<category>`}</p>
                  </div>
                </div>
                <div>
                  <p className="amsterdam-text">
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </p>
                </div>
              </div>
              <div className="flex flex-column gap-2">
                <div className="flex gap-10px">
                  <TicketIcon />
                  <div className="ticket-text">
                    <p>{`<ticket type - variant>`}</p>
                  </div>
                </div>
                <div className="flex gap-10px">
                  <CalendarIcon />
                  <div className="flex flex-column">
                    <div className="ticket-text">
                      <p>{`<day>, <month> <date>`}</p>
                    </div>
                    <div>
                      <p className="ticket-text-below">{`Duration: <duration>`}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10px">
                  <ClockIcon />
                  <div className="flex flex-column">
                    <div className="ticket-text">
                      <p>{`<time>`}</p>
                    </div>
                    <div>
                      <p className="ticket-text-below">{`Operating hours: <time> to <time>`}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-10px">
                  <UserIcon />
                  <div>
                    <p className="ticket-text">{`5 guests`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="view-payment-div">
            <div className="gray-dashed-line"></div>
            <div className="view-pay-inner">
              <div>
                <a href="" className="view-link">
                  View payment summary
                </a>
              </div>
              <PlusIcon height={16} width={16} color={"#7E808A"} />
            </div>
          </div>
        </div>
        <div className="lower-div">
          <div className="flex flex-column gap-5">
            <div className="lower-sub-container">
              <div className="flex space-between gap-6px">
                <div>
                  <p className="total-payable-text">Total payable:</p>
                </div>
                <div>
                  <p className="total-payable-text">$XXX</p>
                </div>
              </div>
            <div className=""><button className="total-payable-btn"><PiggyBankIcon color={'#299764'}/>{`You save<price>`}</button></div>

              
            </div>
            <div className="flex align justify-start gap-2">
              <div>
                <a href='' className="AED-text">You will be charged in AED</a>
              </div>
              <InfoOutlineIcon />
            </div>
          </div>
          <div className="flex flex-column gap-5">
              <div><p className="terms-condition-text">By clicking “confirm & pay”, you agree to <a href="" className="link-text">Tickete’s general terms and conditions</a> and <a href="" className="link-text">cancellation policy</a>.</p></div>
              <div><button className="confirm-pay-btn align justify w-full"><LockDarkIcon/>Confirm & pay</button></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
