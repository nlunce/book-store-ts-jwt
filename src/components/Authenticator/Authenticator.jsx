import { useSearchParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      // custom username
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();

      try {
        const signUpResult = await Auth.signUp({
          username,
          password,
          attributes: {
            email: attributes.email,
          },
        });

        // Indicate that signup is successful, confirmation is required
        return {
          signUpSuccess: true,
          confirmationRequired: signUpResult.userConfirmed,
        };
      } catch (error) {
        // Handle signUp error if needed
        return { signUpSuccess: false, error };
      }
    },
    async handleSignIn(formData) {
      let { username, password } = formData;
      // custom username
      username = username.toLowerCase();

      const signInResult = await Auth.signIn({
        username,
        password,
        autoSignIn: {
          enabled: true,
        },
      });

      // If sign-in is successful, navigate to the main page
      if (signInResult) {
        const session = await Auth.currentSession();
        const jwtToken = session.getIdToken().getJwtToken();
        localStorage.setItem("jwtToken", jwtToken);

        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 3);
        localStorage.setItem("expiration", expiration.toISOString());

        navigate("/");
      }

      return signInResult;
    },
  };

  return (
    <>
      {mode === "login" && (
        <AuthenticatorUI
          initialState="signIn"
          services={services}
          components={components}
        ></AuthenticatorUI>
      )}

      {mode === "signup" && (
        <AuthenticatorUI
          initialState="signUp"
          services={services}
          components={components}
        ></AuthenticatorUI>
      )}
    </>
  );
};

export default Authenticator;
