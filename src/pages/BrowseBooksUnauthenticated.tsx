import React, { useState } from "react";
import {
  Navbar,
  BookActionCardCollection,
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
  const [selectedItem, setSelectedItem] = useState<
    "contactUs" | "books" | null
  >(null);

  const handleClick = function (itemClicked: "contactUs" | "books") {
    setSelectedItem(itemClicked);
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
        handleClick("contactUs");
      },
    },
  };
  return (
    <>
      <Navbar logoSlot={<LogoComponent />} overrides={navbarOverrides} />

      <ContactUsModal
        overlayFunctionality={() => {
          setSelectedItem(null);
        }}
      />
    </>
  );
};

export default BrowseBooksPageUnauthenticated;
