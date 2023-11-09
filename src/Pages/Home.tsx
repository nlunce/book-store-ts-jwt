import React from "react";
import { Link } from "react-router-dom";

// Define a functional component for the main Browse Books page.
const Home: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/notloggedin">Not Logged IN</Link>
        </li>
        <li>
          <Link to="/loggedin">Logged In</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
