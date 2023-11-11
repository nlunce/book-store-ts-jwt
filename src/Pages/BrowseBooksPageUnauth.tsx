import React from "react";
import { Footer } from "../components/Footer";
import { BookCollection } from "../components/BookCollection";

const BrowseBooksPageUnauth: React.FC = () => {
  return (
    <>
      <BookCollection />
      <Footer />
    </>
  );
};

export default BrowseBooksPageUnauth;
