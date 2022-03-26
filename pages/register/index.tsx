import type { NextPage } from "next";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import styles from "../../styles/pages/Register.module.scss";
import Button from "../../components/base/Button";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../helpers/validation";
import useInput from "../../hooks/useInput";
import useI18n from "../../hooks/useI18n";
import { RegisterTextType } from "../../i18n/types";

const RegisterPage: NextPage = () => {
  const router = useRouter();
  const lang: RegisterTextType = useI18n(router.locale, router.asPath);
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername,
  } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: confirmPassword,
    bind: bindConfirmPassword,
    reset: resetConfirmPassword,
  } = useInput("");

  const toLoginHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    router.push("/login");
  };

  const submitHandler: FormEventHandler = async (event) => {
    event.preventDefault();

    // simple form validation
    if (!validateUsername(username)) {
      return;
    }
    if (!validateEmail(email)) {
      return;
    }
    if (!validatePassword(password) && password !== confirmPassword) {
      return;
    }

    const payload = {
      name: username,
      email,
      password,
    };

    try {
      const response: AxiosResponse<any, any> = await axios.post(
        "/users",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      console.log(data);

      if (response.status === 201) {
        router.push("/login");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetHandler: FormEventHandler = (event) => {
    event.preventDefault();
    resetUsername();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <h1>{lang.title}</h1>
        <form onSubmit={submitHandler} onReset={resetHandler}>
          <div className={styles["input-element"]}>
            <label htmlFor='username'>{lang.username}</label>
            <input
              type='text'
              name='username'
              id='username'
              {...bindUsername}
            />
          </div>
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
          <div className={styles["input-element"]}>
            <label htmlFor='confirm-password'>{lang.confirmPassword}</label>
            <input
              type='password'
              name='confirm-password'
              id='confirm-password'
              {...bindConfirmPassword}
            />
          </div>
          <div className={styles.control}>
            <Button type='reset' className='danger'>
              {lang.resetButton}
            </Button>
            <Button type='button' className='' onClick={toLoginHandler}>
              {lang.loginLink}
            </Button>
            <Button type='submit' className='ok'>
              {lang.registerButton}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
