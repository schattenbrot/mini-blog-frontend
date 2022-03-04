import styled from "styled-components";
import { PostType } from "../../models/models";
import PostListItem from "./postListItem";

export type PostListType = {
  posts: PostType[];
};

const StyledPostList = styled.ul``;

const PostList: React.FC<PostListType> = (props) => {
  const { posts } = props;

  const postList = posts.map((post) => (
    <PostListItem post={post} key={post.id} />
  ));

  return <StyledPostList>{postList}</StyledPostList>;
};

export default PostList;
