import { AboutPageTextType } from "./aboutTextType";
import { CreatePostTextType } from "./createPostTextType";
import { EditUserTextType } from "./editUserTextType";
import { HomeTextType } from "./homeTextType";
import { ShowUsersTextType } from "./showUsersTextType";
import { UsersPageTextType } from "./usersTextType";

export type LanguageType = {
  "/": HomeTextType;
  "/blog/create": CreatePostTextType;
  "/about": AboutPageTextType;
  "/users": UsersPageTextType;
  userDetails: ShowUsersTextType;
  editUser: EditUserTextType;
};

export * from "./createPostTextType";
export * from "./homeTextType";
export * from "./aboutTextType";
export * from "./usersTextType";
export * from "./showUsersTextType";
export * from "./editUserTextType";
