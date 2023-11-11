import React from "react";
import { Link } from "react-router-dom";
import { HomeHero } from "../components/HomeHero";

// Define a functional component for the main Browse Books page.
const Home: React.FC = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/notloggedin">Not Logged IN</Link>
        </li>
        <li>
          <Link to="/loggedin">Logged In</Link>
        </li>
      </ul>
      <HomeHero />
    </>
  );
};

export default Home;
