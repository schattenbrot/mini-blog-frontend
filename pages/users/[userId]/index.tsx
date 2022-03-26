import axios, { AxiosError } from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import Button from "../../../components/base/Button";
import UserListItem from "../../../components/users/UserListItem";
import useI18n from "../../../hooks/useI18n";
import { ShowUsersTextType } from "../../../i18n/types/showUsersTextType";
import { UserType } from "../../../models/models";
import styles from "../../../styles/pages/users/UserDetails.module.scss";

export type UserDetailsProps = {
  selectedUserId: string;
};

const UserDetailsPage: NextPage<UserDetailsProps> = (props) => {
  const router = useRouter();
  const lang: ShowUsersTextType = useI18n(router.locale, router.asPath);
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

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();

    router.push(`/users/${selectedUser!.id}/edit`);
  };

  const deleteHandler: MouseEventHandler<Element> = async () => {
    try {
      await axios.delete(`/users/${selectedUser!.id}`);

      router.push(`/`);
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        console.error("This is an axios error: Delete failed");
      } else {
        console.error("This is not an axios error: Delete failed");
      }
    }
  };

  return (
    <>
      <Head>
        <title>uwuBlog - User</title>
        <meta name='description' content='Create a new user' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        {selectedUser && (
          <>
            <UserListItem user={selectedUser} />
            <form className={styles.controls} onSubmit={submitHandler}>
              <Button type='button' className='danger' onClick={deleteHandler}>
                {lang.deleteButton}
              </Button>
              <Button type='submit' className='btn ok'>
                {lang.editButton}
              </Button>
            </form>
          </>
        )}
        {!selectedUser && <h1>No user found</h1>}
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
