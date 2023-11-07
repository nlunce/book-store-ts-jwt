import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { BookCollection } from "../BookCollection";

const BrowseBooksPageUnauth: React.FC = () => {
  return (
    <>
      <Navbar />
      <BookCollection />
      <Footer />
    </>
  );
};

export default BrowseBooksPageUnauth;
