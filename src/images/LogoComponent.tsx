import React from "react";
import { Image } from "@aws-amplify/ui-react";
import logo from "./logo.png";

const LogoComponent: React.FC = () => {
  return (
    <Image src={logo} alt="logo" width={66} style={{ cursor: "pointer" }} />
  );
};

export default LogoComponent;
