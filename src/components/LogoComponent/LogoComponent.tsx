// LogoComponent.tsx
import React from "react";
import { Image } from "@aws-amplify/ui-react";
import logo from "./logo.png";

interface LogoComponentProps {
  onClick: () => void;
}

const LogoComponent: React.FC<LogoComponentProps> = ({ onClick }) => {
  return (
    <Image
      src={logo}
      alt="logo"
      width={66}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
};

export default LogoComponent;
