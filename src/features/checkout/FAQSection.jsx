import React from "react";
import AboutIllustration from "../../icons/AboutIllustration";

const FAQSection = () => {
  return (
    <div className="flex gap-8">
      <div className="faq-container">
        <div className="flex flex-column">
          <div><p className="faq-text">Frequently asked questions</p></div>
          <div><p className="faq-below-text">Here are some of our most asked questions.</p></div>
        </div>
        <div className="illustraion-container">
          <div className="flex flex-column gap-5">
            <div><p>Still need help? We’re here for you.</p></div>
            <div><button className="confirm-pay-btn">Confirm & pay</button></div>
          </div>
          <AboutIllustration/>
        </div>
      </div>
      <div className="accordion-container"></div>
    </div>
  );
};

export default FAQSection;
