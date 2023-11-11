import React from "react";
import { BookCollection } from "../components";

// Define a functional component for the main Browse Books page.
const BrowseBooksPageAuth: React.FC = () => {
  return (
    <>
      <h1>Logged in</h1>
      <BookCollection />
    </>
  );
};

export default BrowseBooksPageAuth;
