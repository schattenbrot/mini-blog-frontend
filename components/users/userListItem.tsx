import styled from "styled-components";
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
    <ListItem>
      <h2>{name}</h2>
      <p className='userid'>{userid}</p>
      <p>{email}</p>
      <p>{roles[0]}</p>
      <div className='dates'>
        <p>{created_at}</p>
      </div>
    </ListItem>
  );
};

export default UserListItem;
