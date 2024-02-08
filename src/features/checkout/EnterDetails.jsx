import DropDownField from "../../components/dropdownField";
import InputField from "../../components/inputField";

const EnterDetails = () => {
  return (
    <div className="enter-details-section flex flex-column gap-2">
      <div className="enter-details-text-section flex flex-column gap-8">
        <div>
          <span className="enter-details-text">Enter your details</span>
        </div>
        <div>
          <span className="enter-details-text-below">
            We&apos;ll send your tickets to the details below. Booking for a
            friend? Add their details.
          </span>
        </div>

        <div className="enter-details-form flex flex-column gap-6">
          <InputField type="text" placeholder="Full name *" />
          <div className="flex gap-7">
            <DropDownField option={"country code *"} />
            <InputField type="text" placeholder="Phone number *" />
          </div>
          <div className="flex gap-7">
            <InputField type="text" placeholder="Email *" />
            <InputField type="text" placeholder="Confirm email *" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterDetails;
