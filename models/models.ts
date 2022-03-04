export type RolesType = "user" | "admin";

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: RolesType[];
  created_at: string;
};

export type PostType = {
  id: string;
  title: string;
  text: string;
  creator: string;
  created_at: string;
  updated_at: string;
};
