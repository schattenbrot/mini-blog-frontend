import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import Button from "../../components/base/Button";
import PostListItem from "../../components/blog/PostListItem";
import { PostType } from "../../models/models";
import styles from "../../styles/pages/blog/PostDetails.module.scss";

export type PostDetailsProps = {
  selectedPost: PostType;
};

const PostDetailsPage: NextPage<PostDetailsProps> = (props) => {
  return (
    <>
      <Head>
        <title>uwuBlog - Post</title>
        <meta name='description' content='Create a new post' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <PostListItem post={props.selectedPost} />
        <div className={styles.controls}>
          <Button type='button' className='btn ok'>
            Yeah uwu
          </Button>
        </div>
      </div>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  postId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { postId } = context.params as IParams;

  const res = await axios.get(`/posts/${postId}`);

  const post: PostType = res.data;

  return {
    props: {
      selectedPost: post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`/posts`);
  const posts: PostType[] = res.data;
  const paths = posts.map((post) => ({ params: { postId: post.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default PostDetailsPage;
