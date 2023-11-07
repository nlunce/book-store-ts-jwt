import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { BookCollection } from "../BookCollection";

import { AuthenticatorModal, ContactUsModal } from "../Modals";

const BrowseBooksPageUnauth: React.FC = () => {
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

  // const handleClick = function (itemClicked: number) {
  //   setSelectedModal(itemClicked);
  // };

  return (
    <>
      <Navbar />
      <BookCollection />
      <Footer />
      {modals[selectedModal]}
    </>
  );
};

export default BrowseBooksPageUnauth;
