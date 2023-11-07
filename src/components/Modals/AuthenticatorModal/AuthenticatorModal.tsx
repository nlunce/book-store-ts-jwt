import React from "react"; // Import React if it's not already imported
import "./authenticatorModal.css";
import { Authenticator } from "@aws-amplify/ui-react";

interface AuthenticatorModalProps {
  overlayFunctionality: () => void; // Specify the function's return type
  initialState: "signIn" | "signUp" | "resetPassword" | undefined;
}

const AuthenticatorModal: React.FC<AuthenticatorModalProps> = (props) => {
  return (
    <>
      <div
        onClick={props.overlayFunctionality}
        className="authenticator-overlay"
      ></div>
      <div className="authenticator-modal-content">
        <Authenticator initialState={props.initialState} />
      </div>
    </>
  );
};

export default AuthenticatorModal;
