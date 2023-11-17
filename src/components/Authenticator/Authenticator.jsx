import { useSearchParams } from "react-router-dom";

import {
  Authenticator as AuthenticatorUI,
  useTheme,
  View,
  Image,
  Heading,
} from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
const Authenticator = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            maxWidth={"100px"}
            alt="Amplify logo"
            src="src/components/LogoComponent/logo.png"
          />
        </View>
      );
    },
    SignIn: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
          >
            Sign in to your account
          </Heading>
        );
      },
    },
  };

  return (
    <>
      {mode === "login" && (
        <AuthenticatorUI
          initialState="signIn"
          components={components}
        ></AuthenticatorUI>
      )}

      {mode === "signup" && (
        <AuthenticatorUI
          initialState="signUp"
          components={components}
        ></AuthenticatorUI>
      )}
    </>
  );
};

export default Authenticator;
