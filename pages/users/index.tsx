import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEventHandler } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/base/Button";
import useInput from "../../hooks/useInput";
import { State } from "../../store";

import styles from "../../styles/pages/Users.module.scss";

const Users: NextPage = () => {
  const userId: string = useSelector((state: State) => state.user);
  const router = useRouter();

  const { value: typedUserId, bind: bindTypedUserId } = useInput("");

  const searchHandler: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.get(`/users/${typedUserId}`);
      router.push("/users/" + typedUserId);
    } catch (err) {
      console.error("an error occurred");
    }
  };

  return (
    <>
      <Head>
        <title>User</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <h1>Users</h1>
        <Link href={`/users/${userId}`}>
          Click this to see your own user data.
        </Link>
        <form onSubmit={searchHandler} className={styles["input-element"]}>
          <label htmlFor='typedUserId'>Search User ID:</label>
          <input
            type='text'
            name='typedUserId'
            id='typedUserId'
            {...bindTypedUserId}
          />
          <Button type='submit'>Search</Button>
        </form>
      </div>
    </>
  );
};

export default Users;
