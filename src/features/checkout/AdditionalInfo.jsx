import React from "react";
import DropDownField from "../../components/dropdownField";
import InputField from "../../components/inputField";

const AdditionalInfo = () => {
  return (
    <div className="enter-details-section flex flex-column gap-2">
      <div className="enter-details-text-section flex flex-column gap-8">
        <div>
          <span className="enter-details-text">Additional information</span>
        </div>
        <div>
          <span className="enter-details-text-below">
            We need a few more details to complete your reservation.
          </span>
        </div>

        <div className="enter-details-form flex flex-column gap-6">
          <div className="flex gap-7">
            <InputField type="text" placeholder="Input lable *" />
            <DropDownField option={"Select *"} />
          </div>
          <DropDownField option="Multi select *" />
        </div>
      </div>
    </div>
  );  
};

export default AdditionalInfo;
