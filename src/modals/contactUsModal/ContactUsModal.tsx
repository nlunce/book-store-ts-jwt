import "./contactUsModal.css";
import { ContactUs } from "../../ui-components";

interface ContactUsModalProps {
  overlayFunctionality: () => void; // Specify the function's return type
}

const ContactUsModal: React.FC<ContactUsModalProps> = (props) => {
  return (
    <>
      <div
        onClick={props.overlayFunctionality}
        className="contact-overlay"
      ></div>
      <div className="contact-modal-content">
        <ContactUs />
      </div>
    </>
  );
};

export default ContactUsModal;
