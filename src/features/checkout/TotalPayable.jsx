import React from "react";
import InfoIcon from "../../icons/InfoIcon";

const TotalPayable = () => {
  return (
    <div className="flex flex-column gap-4">
      <div>
        <span className="total-payable-text">Total Payable: $XXX</span>
      </div>
      <div className="free-cancelation ">
        <div className="flex  gap-2">
          <div>
            <InfoIcon color={'#000000'} />
          </div>
          <div className="flex flex-column gap-1">
            <div>
              <p className="free-cancelation-text">
                You will be charged in AED
              </p>
            </div>
            <div>
              <p className="free-cancelation-text-below">
                The price shown here is in US Dollar (USD) as per the current
                conversion rate. You will be charged in United Arab Emirates
                Dirham (AED).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPayable;
