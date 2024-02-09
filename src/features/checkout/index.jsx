import "../../styles/Checkout.css";
import Header from "../../components/header";
import InfoIcon from "../../icons/InfoIcon";
import EnterDetails from "./EnterDetails";
import TotalPayable from "./TotalPayable";
import SelectPaymentMode from "./SelectPaymentMode";
import AdditionalInfo from "./AdditionalInfo";
import FAQSection from "./FAQSection";
import Carousel from "../../components/carousel/Carousel";

const CheckoutPage = () => {
  return (
    <>
      <div className="flex flex-column">
        <Header />
        <div className="checkout-sub-container ">
          <div className="checkout-sub-container-left-section">
            <div className="confirm-pay-container">
              <div className="flex flex-column gap-8">
                <div>
                  <span className="confirm-heading">Confirm & pay</span>
                </div>
                <div className="free-cancelation ">
                  <div className="flex flex-column gap-1">
                    <div>
                      <p className="free-cancelation-text">Free cancellation</p>
                    </div>
                    <div>
                      <p className="free-cancelation-text-below">
                        Tickets can be cancelled by 13th December, 2022.
                      </p>
                    </div>
                  </div>
                  <div>
                    <InfoIcon />
                  </div>
                </div>
              </div>
            </div>
            <EnterDetails />
            <AdditionalInfo />
            <SelectPaymentMode />
            <TotalPayable />
            <FAQSection />
          </div>
          <div className="checkout-sub-container-right-section">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
