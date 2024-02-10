import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
import CrossIcon from "../../icons/CrossIcon";
import "../../styles/Accordion.css";
import { AccordionData } from "../../data/AccordionData";


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {AccordionData.map((item, index) => (
        <div key={item.id} className="accordion-item" onClick={() => toggleAccordion(index)}>
        <div className="flex gap-5">
        <div className="accordion-item-icon"> {activeIndex === index ? <CrossIcon /> : <PlusIcon />}</div>
        <div className="accordion-item-text">
        <div className="accordion-item-header"><span>{item.question}</span></div>
        {activeIndex === index && (
            <div className="accordion-item-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
        </div>

        </div>
      ))}
    </div>
  );
};

export default Accordion;