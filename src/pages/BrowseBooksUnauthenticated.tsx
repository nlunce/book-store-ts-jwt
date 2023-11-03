import React, { useState } from "react";
import {
  Navbar,
  BookActionCardCollection,
  Footer,
  CloseBar,
  ProductDetail,
} from "../ui-components";

import {
  navbarOverrides as navbarOverridesImported,
  footerOverrides,
} from "../stylingOverrides.js";
import { Book } from "../API";
import { LogoComponent } from "../images";

import { AuthenticatorModal, ContactUsModal } from "../modals";

const BrowseBooksPageUnauthenticated: React.FC = () => {
  const [selectedModal, setSelectedModal] = useState<number>(-1);

  const modals = [
    <ContactUsModal
      overlayFunctionality={() => {
        setSelectedModal(-1);
      }}
    />,
    <AuthenticatorModal
      overlayFunctionality={() => {
        setSelectedModal(-1);
      }}
      initialState="signIn"
    />,
    <AuthenticatorModal
      overlayFunctionality={() => {
        setSelectedModal(-1);
      }}
      initialState="signUp"
    />,
  ];

  const handleClick = function (itemClicked: number) {
    setSelectedModal(itemClicked);
  };

  const navbarOverrides = {
    Navbar: {
      width: "100%",
    },
    Home: {
      style: {
        cursor: "pointer",
      },
    },
    Books: {
      style: {
        cursor: "pointer",
      },
    },
    "Contact us": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        handleClick(0);
      },
    },
    Button39493466: {
      onClick: () => {
        handleClick(1);
      },
    },
    Button39493467: {
      onClick: () => {
        handleClick(2);
      },
    },
  };
  return (
    <>
      <Navbar logoSlot={<LogoComponent />} overrides={navbarOverrides} />
      <BookActionCardCollection width={"100%"} />
      <Footer width={"100%"} />
      {modals[selectedModal]}
    </>
  );
};

export default BrowseBooksPageUnauthenticated;
