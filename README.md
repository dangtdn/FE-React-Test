## 2. Task Overview Module:

○ Display a list of compliance tasks (hardcoded initially).
○ Each task should include title, due date, assigned person, and status.
○ Optionally, allow sorting/filtering of tasks.

## 5. Authentication (AWS Cognito Integration):

○ Use AWS Amplify to set up user authentication with Cognito.
○ Protect dashboard access behind a login screen.

step 1: Set up emvironment

```bash
npm install -g @aws-amplify/cli

amplify configure
```

step 2: Create the React app

```bash
npx create-react-app <name of your app>

cd <name of your app>

amplify init
```

step 3: Add authentication with Cognito

```bash
amplify add auth

amplify push

npm install aws-amplify @aws-amplify/ui-react

npm start
```
