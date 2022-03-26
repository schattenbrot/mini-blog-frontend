import styles from "../../styles/components/users/UserList.module.scss";
import { UserType } from "../../models/models";
import UserListItem from "./UserListItem";

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

  return <ul className={styles["user-list"]}>{listItems}</ul>;
};

export default UserList;
