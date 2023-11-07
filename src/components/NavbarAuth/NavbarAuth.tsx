// Navbar.tsx
import React from "react";
import { NavbarAuthenticated as UINavbarAuth } from "../../ui-components";
import navbarAuthOverrides from "./navbarAuthOverrides";

const NavbarAuth: React.FC = () => {
  return <UINavbarAuth overrides={navbarAuthOverrides} />;
};

export default NavbarAuth;
