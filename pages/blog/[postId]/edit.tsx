import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/pages/blog/CreatePost.module.scss";
import useInput from "../../../hooks/useInput";
import Button from "../../../components/base/Button";
import { validateText, validateTitle } from "../../../helpers/validation";
import axios from "axios";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { PostType } from "../../../models/models";
import { useSelector } from "react-redux";
import { State } from "../../../store";

export type PostEditProps = {
  selectedPost: PostType;
};

const EditPostPage: NextPage<PostEditProps> = (props) => {
  const {
    id: postId,
    title: initialTitle,
    text: initialText,
  } = props.selectedPost;
  const router = useRouter();

  const {
    value: title,
    bind: bindTitle,
    reset: resetTitle,
  } = useInput(initialTitle);
  const {
    value: text,
    bind: bindText,
    reset: resetText,
  } = useInput(initialText);

  const submitHandler: React.FormEventHandler = async (event) => {
    event.preventDefault();

    // validate Title and Text
    if (!validateTitle(title) && !validateText(text)) {
      return;
    }

    const payload = {
      title,
      text,
    };

    try {
      await axios.patch(`/posts/${postId}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      router.push("/blog");
      return;
    } catch (err) {
      console.error(err);
    }
  };

  const resetHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    resetTitle();
    resetText();
  };

  return (
    <>
      <Head>
        <title>uwuBlog - Create Post</title>
        <meta name='description' content='Create a new post' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.container}>
        <h1>Edit Post - {postId}</h1>
        <form onSubmit={submitHandler} onReset={resetHandler}>
          <div className={styles["input-element"]}>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' {...bindTitle} />
          </div>
          <div className={styles["input-element"]}>
            <label htmlFor='text'>Text</label>
            <textarea
              name='text'
              id='text'
              rows={4}
              maxLength={700}
              {...bindText}
            />
          </div>
          <div className={styles.control}>
            <Button type='reset' className='danger'>
              Reset
            </Button>
            <Button type='submit' className='ok'>
              Confirm
            </Button>
          </div>
        </form>
      </main>
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
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default EditPostPage;
