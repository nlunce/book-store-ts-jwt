import React from "react";
import { BookCollection } from "../components/BookCollection";

const BrowseBooksPageUnauth: React.FC = () => {
  return (
    <>
      <h1>Not logged in</h1>
      <BookCollection />
    </>
  );
};

export default BrowseBooksPageUnauth;
