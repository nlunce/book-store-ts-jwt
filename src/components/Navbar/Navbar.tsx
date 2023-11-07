// Navbar.tsx
import React from "react";
import { Navbar as UINavbar } from "../../ui-components";
import { LogoComponent } from "../LogoComponent";
import navbarOverrides from "./navbarOverrides";

const Navbar: React.FC = () => {
  return <UINavbar overrides={navbarOverrides} logoSlot={<LogoComponent />} />;
};

export default Navbar;
