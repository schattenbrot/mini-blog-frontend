import styles from "../../styles/components/blog/PostList.module.scss";
import { PostType } from "../../models/models";
import PostListItem from "./PostListItem";

export type PostListType = {
  posts: PostType[];
};

const PostList: React.FC<PostListType> = (props) => {
  const { posts } = props;

  const postList = posts.map((post) => (
    <PostListItem post={post} key={post.id} />
  ));

  return <ul className={styles["post-list"]}>{postList}</ul>;
};

export default PostList;
