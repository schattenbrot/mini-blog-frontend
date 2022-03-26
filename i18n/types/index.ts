import { AboutPageTextType } from "./aboutTextType";
import { CreatePostTextType } from "./createPostTextType";
import { EditUserTextType } from "./editUserTextType";
import { HomeTextType } from "./homeTextType";
import { LoginTextType } from "./loginTextType";
import { RegisterTextType } from "./registerTextType";
import { ShowUsersTextType } from "./showUsersTextType";
import { UsersPageTextType } from "./usersTextType";

export type LanguageType = {
  "/": HomeTextType;
  "/register": RegisterTextType;
  "/login": LoginTextType;
  "/blog/create": CreatePostTextType;
  "/about": AboutPageTextType;
  "/users": UsersPageTextType;
  userDetails: ShowUsersTextType;
  editUser: EditUserTextType;
};

export * from "./homeTextType";
export * from "./registerTextType";
export * from "./loginTextType";
export * from "./createPostTextType";
export * from "./aboutTextType";
export * from "./usersTextType";
export * from "./showUsersTextType";
export * from "./editUserTextType";
