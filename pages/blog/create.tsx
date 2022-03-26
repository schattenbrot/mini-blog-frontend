import { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/pages/blog/CreatePost.module.scss";
import useInput from "../../hooks/useInput";
import Button from "../../components/base/Button";
import { validateText, validateTitle } from "../../helpers/validation";
import axios from "axios";
import { useRouter } from "next/router";
import useI18n from "../../hooks/useI18n";
import { CreatePostTextType } from "../../i18n/types";

const CreatePostPage: NextPage = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const lang: CreatePostTextType = useI18n(locale, asPath);
  const { value: title, bind: bindTitle, reset: resetTitle } = useInput("");
  const { value: text, bind: bindText, reset: resetText } = useInput("");

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

    const response = await axios.post("/posts", payload, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    if (!response) {
      console.log("Something went wrong!");
    }

    if (response.status === 201) {
      router.push("/blog");
      return;
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
        <h1>{lang.title}</h1>
        <form onSubmit={submitHandler} onReset={resetHandler}>
          <div className={styles["input-element"]}>
            <label htmlFor='title'>{lang.titleLabel}</label>
            <input type='text' name='title' id='title' {...bindTitle} />
          </div>
          <div className={styles["input-element"]}>
            <label htmlFor='text'>{lang.textLabel}</label>
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
              {lang.resetButton}
            </Button>
            <Button type='submit' className='ok'>
              {lang.createButton}
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CreatePostPage;
