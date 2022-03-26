import { LanguageType } from "./types";

const germanContent: LanguageType = {
  "/": {
    title: "Willkommen",
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
