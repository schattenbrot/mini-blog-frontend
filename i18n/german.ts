import { LanguageType } from "./types";

const germanContent: LanguageType = {
  "/": {
    title: "Willkommen",
  },
  "/register": {
    title: "Registrieren",
    username: "Benutzername",
    email: "Email",
    password: "Passwort",
    confirmPassword: "Password bestätigen",
    resetButton: "Zurücksetzen",
    loginLink: "Zum Login",
    registerButton: "Registrieren",
  },
  "/login": {
    title: "Einloggen",
    email: "Email",
    password: "Passwort",
    resetButton: "Zurücksetzen",
    registerLink: "Zum Registrieren",
    loginButton: "Einloggen",
  },
  "/blog/create": {
    title: "Beitrag erstellen",
    titleLabel: "Titel",
    textLabel: "Text",
    resetButton: "Zurücksetzen",
    createButton: "Erstellen",
  },
  "/about": {
    content:
      "Geiler Inhalt! Gute Arbeit diese versteckte Seite zu finden. Leserlich?! Nicht wirklich, aber da.",
  },
  "/users": {
    title: "Benutzer",
    selfDetailsLink: "Klick hier, um deine eigenen Nutzer Details zu sehen.",
    searchLabel: "Suche eine bestimmte Benutzer ID:",
    searchButton: "Suchen",
  },
  userDetails: {
    editButton: "Bearbeiten",
    deleteButton: "Löschen",
  },
  editUser: {
    title: "Bearbeite Benutzer",
    usernameLabel: "Benutzername",
    emailLabel: "Email",
    passwordLabel: "Passwort",
    confirmPasswordLabel: "Passwort bestätigen",
    deleteButton: "Löschen",
    confirmButton: "Updaten",
  },
};

export default germanContent;
