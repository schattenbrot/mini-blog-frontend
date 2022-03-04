import styled from "styled-components";
import { UserType } from "../../models/models";
import UserListItem, { UserListItemProps } from "./userListItem";

const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

type UserListProps = {
  users: UserType[];
};

const UserList: React.FC<UserListProps> = (props) => {
  const { users } = props;

  if (users.length === 0) {
    return <p>No users found...</p>;
  }

  const listItems = users.map((user: UserType) => (
    <UserListItem user={user} key={user.id} />
  ));

  return <UnorderedList>{listItems}</UnorderedList>;
};

export default UserList;
