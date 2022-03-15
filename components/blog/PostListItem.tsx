import { PostType } from "../../models/models";
import styles from "../../styles/components/blog/PostListItem.module.scss";

export type PostListItemType = {
  post: PostType;
};

const PostListItem: React.FC<PostListItemType> = (props) => {
  const { id, title, text, creator, created_at, updated_at } = props.post;

  return (
    <li className={styles.card}>
      <div>
        <h2 className={styles["card__title"]}>{title}</h2>
        <p className={styles["card__text"]}>{text}</p>
        <p>{creator}</p>
      </div>
      <div className={styles["card__dates"]}>
        <p>{created_at}</p>
        <p>{updated_at}</p>
      </div>
    </li>
  );
};

export default PostListItem;
