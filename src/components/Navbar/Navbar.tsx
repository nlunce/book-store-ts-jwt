// Navbar.tsx
import React, { useState } from "react";
import { Navbar as UINavbar } from "../../ui-components";
import { LogoComponent } from "../LogoComponent";
import navbarOverrides from "./navbarOverrides";
import { AuthenticatorModal, ContactUsModal } from "../Modals";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  function navigateHandler(page: string | null) {
    navigate(`/${page}`);
  }

  interface NavOverrides {}

  const navOverrides: NavOverrides = {
    ...navbarOverrides,
    Home: {
      ...navbarOverrides["Home"],
      onClick: () => {
        navigateHandler("");
      },
    },
    Books: {
      ...navbarOverrides["Books"],
      onClick: () => {
        navigateHandler("books");
      },
    },
    "Contact us": {
      ...navbarOverrides["Contact us"],
      onClick: () => {
        setSelectedModal(0);
      },
    },
    Button39493466: {
      ...navbarOverrides["Button39493466"],
      onClick: () => {
        setSelectedModal(1);
      },
    },
    Button39493467: {
      ...navbarOverrides["Button39493467"],
      onClick: () => {
        setSelectedModal(2);
      },
    },
  };

  const [selectedModal, setSelectedModal] = useState<number>(-1);

  return (
    <>
      <UINavbar
        overrides={navOverrides}
        logoSlot={
          <LogoComponent
            onClick={() => {
              navigateHandler("");
            }}
          />
        }
      />
    </>
  );
};

export default Navbar;
