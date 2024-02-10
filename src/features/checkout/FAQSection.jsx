import React from "react";
import AboutIllustration from "../../icons/AboutIllustration";
import Accordion from "../../components/accordion/Accordion";

const FAQSection = () => {
  return (
    <div className="faq-parent">
      
      <div className="faq-container">

        <div className="faq-inner-text">
          <div><p className="faq-text">Frequently asked questions</p></div>
          <div><p className="faq-below-text">Here are some of our most asked questions.</p></div>
        </div>
        <div className="illustraion-container">
          <div className="flex flex-column gap-5">
            <div><p className="need-help-text">Still need help? <br/> We’re here for you.</p></div>
            <div><button className="chat-with-us-btn">Confirm & pay</button></div>
          </div>
          <AboutIllustration/>
        </div>
      </div>
      <div className="accordion-container">
        <Accordion/>
      </div>
      <div className="faq-heading-text">
          <div><p className="faq-text">Frequently asked questions</p></div>
          <div><p className="faq-below-text">Here are some of our most asked questions.</p></div>
        </div>
    </div>
  );
};

export default FAQSection;
