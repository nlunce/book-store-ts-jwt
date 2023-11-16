import React from "react";
import { BookCollection } from "../components/BookCollection";
// import { useLoaderData } from "react-router-dom";

const BooksPage: React.FC = () => {
  // const data = useLoaderData();
  return <BookCollection />;
};

export default BooksPage;

// export async function loader() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//   } else {
//     return response;
//   }
// }
