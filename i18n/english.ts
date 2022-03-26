import { LanguageType } from "./types";

const englishContent: LanguageType = {
  "/": {
    title: "Welcome",
  },
  "/register": {
    title: "Register",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    resetButton: "Reset",
    loginLink: "To Login",
    registerButton: "Register",
  },
  "/login": {
    title: "Login",
    email: "Email",
    password: "Password",
    resetButton: "Reset",
    registerLink: "To Register",
    loginButton: "Login",
  },
  "/blog/create": {
    title: "Create Post",
    titleLabel: "Title",
    textLabel: "Text",
    resetButton: "Reset",
    createButton: "Create",
  },
  "/about": {
    content:
      "Insane content! Good job finding this hidden page. Readable?! Not really, but it's there.",
  },
  "/users": {
    title: "Users",
    selfDetailsLink: "Click this to see your own details.",
    searchLabel: "Search For User ID:",
    searchButton: "Search",
  },
  userDetails: {
    editButton: "Edit",
    deleteButton: "Delete",
  },
  editUser: {
    title: "Edit User",
    usernameLabel: "Username",
    emailLabel: "Email",
    passwordLabel: "Password",
    confirmPasswordLabel: "Repeat Password",
    deleteButton: "Delete",
    confirmButton: "Update",
  },
};

export default englishContent;
