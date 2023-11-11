import React from "react";
import { BookCollection } from "../components/BookCollection";
// import { useLoaderData } from "react-router-dom";

const BrowseBooksPageUnauth: React.FC = () => {
  // const data = useLoaderData();
  return (
    <>
      <h1>Not logged in</h1>
      <BookCollection />
    </>
  );
};

export default BrowseBooksPageUnauth;

// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//   } else {
//     return response;
//   }
// }
