// Navbar.tsx
import React, { useState } from "react";
import { Navbar as UINavbar } from "../../ui-components";
import { LogoComponent } from "../LogoComponent";
// import navbarOverrides from "./navbarOverrides";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function navigateHandler(page) {
    navigate(`/${page}`);
  }
  const [setSearchParams] = useSearchParams();

  const [token, setToken] = useState(true);

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
        visibility: token ? "visible" : "hidden",
      },
    },
    "Redeem Code": {
      style: {
        cursor: "pointer",
        visibility: token ? "visible" : "hidden",
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
        visibility: token ? "visible" : "hidden",
      },
      onClick: () => {
        navigateHandler("");
      },
    },
    Button39493466: {
      //Log In
      style: {
        visibility: token ? "visible" : "hidden",
      },
      onClick: () => {
        navigateHandler("auth?mode=login");
      },
    },
    Button39493467: {
      //Sign Up
      style: {
        visibility: token ? "visible" : "hidden",
      },
      onClick: () => {
        navigateHandler("auth?mode=signup");
      },
    },
    Button4456836: {
      //Logout
      style: {
        visibility: token ? "visible" : "hidden",
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
