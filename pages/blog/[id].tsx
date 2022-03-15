import { NextPage } from "next";
import Head from "next/head";

const PostDetailPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name='description' content='Create a new post' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Post Details</div>
    </>
  );
};

export default PostDetailPage;
