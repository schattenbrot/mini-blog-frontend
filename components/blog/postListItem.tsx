import { PostType } from "../../models/models";

export type PostListItemType = {
  post: PostType;
};

const PostListItem: React.FC<PostListItemType> = (props) => {
  const { id, title, text, creator, created_at, updated_at } = props.post;

  return (
    <li key={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{creator}</p>
      <p>{created_at}</p>
      <p>{updated_at}</p>
    </li>
  );
};

export default PostListItem;
