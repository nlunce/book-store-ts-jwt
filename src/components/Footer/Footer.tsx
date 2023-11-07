// Navbar.tsx
import React from "react";
import { Footer as UIFooter } from "../../ui-components";
import footerOverrides from "./footerOverrides";

const Navbar: React.FC = () => {
  return <UIFooter overrides={footerOverrides} />;
};

export default Navbar;
