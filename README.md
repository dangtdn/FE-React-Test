# Project Title: Modular Compliance Dashboard

## Project Description:

The goal is to create a basic version of a Modular Compliance Dashboard using your preferred
frontend framework (Angular, React, or Vue.js). This dashboard will focus on displaying
compliance-related information in a modular and user-friendly way.

## Features:

### 1. Microfrontend Architecture:

#### Approach:

1. Research and thoroughly understand microfrontend architecture through relevant documentation.
2. Divide the dashboard into modules and design each module for independent development, deployment, and state management.
3. Implement and integrate the modules using supportive tools and establish an appropriate CI/CD pipeline.

### 2. Task Overview Module: (Completed)

#### Description:

- Display a list of compliance tasks (hardcoded initially).
- Each task should include title, due date, assigned person, and status.
- Optionally, allow sorting/filtering of tasks.

#### Manual:

Step 1: Display a list of compliance tasks (hardcoded initially)

- Build the UI using the shadcn/ui library (https://ui.shadcn.com/docs) and TailwindCSS.
- The hardcoded task data is stored in `src/assets/data/taskList.js` and managed by Redux to display the task list on the dashboard page.

Step 2: Optionally, allow sorting/filtering of tasks.

- Install the @tanstack/react-table library (https://tanstack.com/table/latest/docs/overview). This is a library used in React to efficiently and flexibly build and manage data tables.

```bash
npm install @tanstack/react-table

```

### 3. Compliance Status Module:

#### Approach:

- Research and utilize the Recharts library (https://recharts.org/en-US/guide) to present a visual overview of overall compliance status (e.g., pie chart or bar graph).
- Use Axios to call the API and fetch data from the backend.
- Data management with redux.
- Display metrics such as the percentage of completed tasks, overdue tasks, etc.

### 4. Recent Activity Module:

#### Approach:

- Research and build UI with HTML/CSS or related libraries.
- Use Axios to call API and get data from Backend.
- Data management with redux.
- Display log entries with timestamp, action description and related user.
- Use react-hook-form to handle form

### 5. Authentication (AWS Cognito Integration): (Completed)

#### Description:

- Use AWS Amplify to set up user authentication with Cognito.
- Protect dashboard access behind a login screen.

#### Manual:

docs: https://docs.amplify.aws/gen1/javascript/start/project-setup/prerequisites/

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

## Run The Projects

In the project directory, you can run:

### `npm install`

### `npm install -g @aws-amplify/cli`

### `amplify init`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
