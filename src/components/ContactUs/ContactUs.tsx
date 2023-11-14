// ContactUs.tsx
import classes from "./ContactUs.module.css";
import { ContactUs as ContactUsUI } from "../../ui-components";

const ContactUs: React.FC = () => {
  return (
    <div className={classes.container}>
      <ContactUsUI />
    </div>
  );
};

export default ContactUs;
