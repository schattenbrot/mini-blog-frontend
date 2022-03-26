import { CreatePostTextType } from "./createPostTextType";
import { HomeTextType } from "./homeTextType";

export type LanguageType = {
  "/": HomeTextType;
  "/blog/create": CreatePostTextType;
};

export * from "./createPostTextType";
export * from "./homeTextType";
