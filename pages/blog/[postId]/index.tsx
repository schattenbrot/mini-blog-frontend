import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { FormEventHandler, MouseEventHandler } from "react";
import Button from "../../../components/base/Button";
import PostListItem from "../../../components/blog/PostListItem";
import { PostType } from "../../../models/models";
import styles from "../../../styles/pages/blog/PostDetails.module.scss";

export type PostDetailsProps = {
  selectedPost: PostType;
};

const PostDetailsPage: NextPage<PostDetailsProps> = (props) => {
  const router = useRouter();
  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    router.push(`/blog/${props.selectedPost.id}/edit`);
  };

  const deleteHandler: MouseEventHandler<Element> = async () => {
    try {
      await axios.delete(`/posts/${props.selectedPost.id}`);

      router.push(`/blog`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>uwuBlog - Post</title>
        <meta name='description' content='Create a new post' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <PostListItem post={props.selectedPost} />
        <form className={styles.controls} onSubmit={submitHandler}>
          <Button type='button' className='danger' onClick={deleteHandler}>
            Delete
          </Button>
          <Button type='submit' className='btn ok'>
            Edit
          </Button>
        </form>
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
