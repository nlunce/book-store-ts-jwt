// Navbar.tsx
import React from "react";
import { Footer as UIFooter } from "../../ui-components";
import footerOverrides from "./footerOverrides";

const Footer: React.FC = () => {
  return <UIFooter overrides={footerOverrides} />;
};

export default Footer;
