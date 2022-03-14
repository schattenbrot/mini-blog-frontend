import styled from "styled-components";
import styles from "../../styles/components/users/UserListItem.module.scss";
import { UserType } from "../../models/models";

const ListItem = styled.li`
  margin: 0;
  padding: 1em;
  border-radius: 0.5em;
  background-color: #ccc;

  h2 {
    display: inline-block;
    font-size: 1em;
  }

  p {
    font-size: 0.5em;
  }

  .userid {
    margin-left: 10em;
    display: inline-block;
  }

  .dates {
    margin-top: 1em;

    p {
      text-align: right;
    }
  }

  &:hover {
    scale: 1.1;
    background-color: white;
    box-shadow: 0 0.25em 1em #fff;
  }
`;

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
