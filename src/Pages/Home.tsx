import React from "react";
import { Link } from "react-router-dom";
import { HomeHero } from "../components/HomeHero";

// Define a functional component for the main Browse Books page.
const HomePage: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/books">Not Logged IN</Link>
        </li>
        <li>
          <Link to="/loggedin">Logged In</Link>
        </li>
      </ul>
      <HomeHero />
    </>
  );
};

export default HomePage;
