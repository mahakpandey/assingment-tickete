import "../../styles/Checkout.css";
import Header from "../../components/header";
import InfoIcon from "../../icons/InfoIcon";
import EnterDetails from "./EnterDetails";
import TotalPayable from "./TotalPayable";
import SelectPaymentMode from "./SelectPaymentMode";
import AdditionalInfo from "./AdditionalInfo";
import FAQSection from "./FAQSection";
import Footer from "../../components/footer";
import BookingSummary from "./BookingSummary";

const CheckoutPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="inner-container">
        <div className="checkout-sub-container">
          <div className="checkout-sub-container-left-section">
            <div className="confirm-pay-container">
              <div className="flex flex-column gap-8">
                <div className="confirm-heading-div">
                  <span className="confirm-heading">Confirm & pay</span>
                </div>
                <div className="free-cancelation-container">
                  <div className="free-cancelation ">
                    <div className="flex flex-column gap-1">
                      <div>
                        <p className="free-cancelation-text">
                          Free cancellation
                        </p>
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
                  <div className="gray-line"></div>
                </div>
              </div>
            </div>
            <EnterDetails />
            <AdditionalInfo />
            <SelectPaymentMode />
            <TotalPayable />
          </div>
          <div className="checkout-sub-container-right-section">
           <BookingSummary/>
          </div>

        </div>
        <div className="gray-line"></div>

        </div>
        <div className="faq-section">
        <FAQSection />
        <div className="gray-line"></div>

        </div>

        <Footer />
      </div>
    </>
  );
};

export default CheckoutPage;
