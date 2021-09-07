import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getInitialLocale } from "lib/translations/getInitialLocale";

import {
  AnonUserClient,
  LoggedInUserClient,
} from "../packages/Commercetools/Clients/APIClient";
import Login from "../components/login/login";

const Home: NextPage = () => {
  // Sign up to do
  // useEffect(() => {
  //   AnonUserClient.me()
  //     .signup()
  //     .post({ body: { email: "dave@daveleigh.xyz", password: "password" } })
  //     .execute()
  //     .then((x) => {
  //       console.log(x);
  //     });
  // }, []);

  // Once logged in..
  // LoggedInUserClient
  //   .me()
  //   .get()
  //   .execute()
  //   .then((x) => {
  //     console.log(x);
  //   });

  useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Child Portal - Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className="w-full md:w-96 lg:w-96">
        <Login />
      </main> */}
    </div>
  );
};

export default Home;
