import InputField from "../../components/inputField";
import CreditCardIcon from "../../icons/CreditCardIcon";
import DinnersClubIcon from "../../icons/DinnersClubIcon";
import GooglePayIcon from "../../icons/GooglePayIcon";
import InfoOutlineIcon from "../../icons/InfoOutline";
import InputAddOnIcon from "../../icons/InputAddOnIcon";
import LockDarkIcon from "../../icons/LockDarkIcon";
import MastercardIcon from "../../icons/MastercardIcon";
import PiggyBankIcon from "../../icons/PiggyBankIcon";
import RadioIcon from "../../icons/RadioIcon";
import VisaIcon from "../../icons/VisaIcon";

const SelectPaymentMode = () => {
  return (
    <div className="select-payment-mode">
      <div>
        <div>
          <p className="select-payment-text">Select your mode of payment</p>
        </div>
        <div>
          <p className="select-payment-text-below">
            Payments with Tickete are secure and encrypted.
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="credit-card-details">
          <div className="flex space-between">
            <div className="flex align gap-3">
              <div className="credit-card-icon">
                <CreditCardIcon />
              </div>
              <div>
                <p className="credit-heading">Credit & debit card</p>
              </div>
            </div>
            <div style={{ height: "24px" }}>
              <RadioIcon />
            </div>
          </div>
          <div className="flex justify-start gap-2">
            <VisaIcon />
            <MastercardIcon />
            <DinnersClubIcon />
          </div>
          <div className="flex flex-column gap-6 ">
            <div className="flex gap-7">
              <InputField type="text" placeholder="Name on card*" />
              <InputField type="text" placeholder="Card number *" />
            </div>
            <div className="flex gap-7">
              <InputField type="text" placeholder="Expiry date *" />
              <InputField type="text" placeholder="<CVV/CVC> *" />
            </div>
          </div>
          <div className="confirm-and-pay-container">
            <div className="flex flex-column gap-half">
              <div className=" total-payable-btn-container">
                <div className="flex gap-6px">
                  <div><p className="total-payable-text">Total payable:</p></div>
                  <div><p className="total-payable-text">$XXX</p></div>
                </div>
                <div><button className="save-price-btn"><PiggyBankIcon/>{`You save<price>`}</button></div>
              </div>
              <div className="flex justify-start gap-2">
                <div><p className="AED-text">You will be charged in AED</p></div>
                <InfoOutlineIcon/>
              </div>
            </div>
            <div className="flex flex-column gap-5">
              <div><p className="terms-condition-text">By clicking “confirm & pay”, you agree to <a href="" className="link-text">Tickete’s general terms and conditions</a> and <a href="" className="link-text">cancellation policy</a>.</p></div>
              <div><button className="confirm-pay-btn"><LockDarkIcon/>Confirm & pay</button></div>
            </div>
          </div>
          
        </div>
        <div className="coming-soon-div">
          <div className="coming-soon-text"><InputAddOnIcon/><p>coming soon</p></div>
          <div><input type="radio" id="html" name="fav_language" value="HTML" /></div>
        </div>
        <div className="coming-soon-div">
          <div className="coming-soon-text"><GooglePayIcon/><p>coming soon</p></div>
          <div><input type="radio" id="html" name="fav_language" value="HTML" /></div>
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMode;
