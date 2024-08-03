import "./App.css";
import Router from "./router/router";

// Imports the Amplify library from 'aws-amplify' package. This is used to configure your app to interact with AWS services.
import { Amplify } from "aws-amplify";

// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import "@aws-amplify/ui-react/styles.css";

// Imports the awsExports configuration file generated by the Amplify CLI. This file contains the AWS service configurations (like Cognito, AppSync, etc.) specific to your project.
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      <Router />
    </Authenticator>
  );
}

export default withAuthenticator(App);
