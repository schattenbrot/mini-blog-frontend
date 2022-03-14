import type { NextPage } from "next";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import PostList from "../../components/blog/PostList";
import { PostType } from "../../models/models";
import styles from "../../styles/pages/Blog.module.scss";

const Blog: NextPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/v1/posts");
      const data: PostType[] = response.data;
      setPosts(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.container}>
        <h1>Blog</h1>
        <PostList posts={posts} />
      </main>
    </>
  );
};

export default Blog;
