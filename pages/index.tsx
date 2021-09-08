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
import { getMe } from "packages/Commercetools/Users/getUser";
import { createRetailer } from "packages/Commercetools/Users/createUser";

const Home: NextPage = () => {

  useEffect(() => {

    (async () => {

   
      // SIGN UP
      //let retailer = await createRetailer("dave-retailer@gmail.com", "password", "dave books", "bs30 6el", "UK");

      // LOG IN    
      const tryLogin = await login()
      
      const content = await tryLogin.json();
      console.log(content);

      let me = await getMe();

      console.log("me");
      console.log(me);

      //window.location.replace(`/${getInitialLocale()}`);

    })();  
  });

  const login = async () => {
    return await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/login`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "dave-retailer@gmail.com",
          password: "password",
        }),
      }
    );
  }

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
