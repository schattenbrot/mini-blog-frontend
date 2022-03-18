import styles from "../../styles/components/users/UserListItem.module.scss";
import { UserType } from "../../models/models";

export type UserListItemProps = {
  user: UserType;
};

const UserListItem: React.FC<UserListItemProps> = (props) => {
  const { id: userid, name, email, roles, created_at } = props.user;

  return (
    <li className={styles.card}>
      <h2 className={styles["card__title"]}>{name}</h2>
      <p>{email}</p>
      <p>{roles[0]}</p>
      <div className={styles["card__dates"]}>
        <p>{created_at}</p>
      </div>
    </li>
  );
};

export default UserListItem;
