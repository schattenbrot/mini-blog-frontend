import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import Button from "../../components/base/Button";
import UserListItem from "../../components/users/UserListItem";
import { UserType } from "../../models/models";
import styles from "../../styles/pages/users/UserDetails.module.scss";

export type UserDetailsProps = {
  selectedUserId: string;
};

const UserDetailsPage: NextPage<UserDetailsProps> = (props) => {
  const [selectedUser, setSelectedUser] = useState<UserType>();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/users/${props.selectedUserId}`);
        const selUser = res.data as UserType;
        setSelectedUser(selUser);
      } catch (error) {
        console.error("Something went wrong");
      }
    })();
  }, [props.selectedUserId]);

  return (
    <>
      <Head>
        <title>uwuBlog - User</title>
        <meta name='description' content='Create a new user' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        {selectedUser && <UserListItem user={selectedUser} />}
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
  userId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { userId } = context.params as IParams;

  return {
    props: {
      selectedUserId: userId,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default UserDetailsPage;
