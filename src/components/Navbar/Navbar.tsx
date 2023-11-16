// Navbar.tsx
import React from "react";
import { Navbar as UINavbar } from "../../ui-components";
import { LogoComponent } from "../LogoComponent";
// import navbarOverrides from "./navbarOverrides";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  function navigateHandler(page: string | null) {
    navigate(`/${page}`);
  }

  const navOverrides = {
    Navbar: {
      width: "100%",
    },
    LogoSlot: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("");
      },
    },
    Home: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("");
      },
    },
    Books: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("books");
      },
    },
    "Your Books": {
      style: {
        cursor: "pointer",
      },
    },
    "Redeem Code": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("");
      },
    },
    "Contact us": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("contact-us");
      },
    },
    User: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        navigateHandler("");
      },
    },
  };

  return (
    <>
      <UINavbar overrides={navOverrides} logoSlot={<LogoComponent />} />
    </>
  );
};

export default Navbar;
