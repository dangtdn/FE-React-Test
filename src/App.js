import "./App.css";
import awsconfig from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import Router from "./router/router";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <Router />
    </Authenticator>
  );
}

export default withAuthenticator(App);
