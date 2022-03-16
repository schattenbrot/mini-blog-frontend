import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import { PostType } from "../../models/models";
import styles from "../../styles/components/blog/PostListItem.module.scss";

export type PostListItemType = {
  post: PostType;
  singlePost?: boolean;
};

const PostListItem: React.FC<PostListItemType> = (props) => {
  const router = useRouter();
  const { id, title, text, creator, created_at, updated_at } = props.post;

  const cardStyle = props.singlePost ? "card" : "card hover-scale";

  const onClickHandler: MouseEventHandler<HTMLLIElement> = (event) => {
    if (props.singlePost) {
      return;
    }

    router.push("/blog/" + id);
  };

  return (
    <li className={styles[cardStyle]} onClick={onClickHandler}>
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
