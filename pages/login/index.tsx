import type { NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import Button from "../../components/base/Button";
import styles from "../../styles/pages/Login.module.scss";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../store";
import { bindActionCreators } from "redux";
import useI18n from "../../hooks/useI18n";
import { LoginTextType } from "../../i18n/types";

const Login: NextPage = () => {
  const router = useRouter();
  const lang: LoginTextType = useI18n(router.locale, router.asPath);
  const dispatch = useDispatch();

  const { loginUser } = bindActionCreators(actionCreators, dispatch);

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const toRegisterHandler: MouseEventHandler = (event) => {
    event.preventDefault();

    router.push("/register");
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    (async () => {
      const payload = {
        email,
        password,
      };

      try {
        const response: AxiosResponse<any, any> = await axios.post(
          `/users/login`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        loginUser(response.data.id);
        router.push("/");
      } catch (error) {
        console.error("An error occurred: " + error);
      }
    })();
  };

  const resetHandler: FormEventHandler = (event) => {
    event.preventDefault();

    resetEmail();
    resetPassword();
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <h1>{lang.title}</h1>
        <form onSubmit={submitHandler} onReset={resetHandler}>
          <div className={styles["input-element"]}>
            <label htmlFor='email'>{lang.email}</label>
            <input type='email' name='email' id='email' {...bindEmail} />
          </div>
          <div className={styles["input-element"]}>
            <label htmlFor='password'>{lang.password}</label>
            <input
              type='password'
              name='password'
              id='password'
              {...bindPassword}
            />
          </div>
          <div className={styles.control}>
            <Button type='reset' className='danger'>
              {lang.resetButton}
            </Button>
            <Button type='button' className='' onClick={toRegisterHandler}>
              {lang.registerLink}
            </Button>
            <Button type='submit' className='ok'>
              {lang.loginButton}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
