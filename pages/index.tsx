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
import { acceptToykens } from "packages/Commercetools/Toykens/acceptToykens";
import { getDistance } from "packages/Location/getLocaility";
import {getToykensForCustomer, incrementToykensForCustomer, decrementToykensForCustomer} from "packages/Commercetools/Toykens/toykenRepository"
import {
  getRetailerPref,
  setRetailerPref,
} from "packages/Commercetools/Retailer/retailerPref";

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      // SIGN UP
      //let retailer = await createRetailer("dave-retailer@gmail.com", "password", "dave books", "bs30 6el", "UK");

      // LOG IN
      // const tryLogin = await login();

      // const content = await tryLogin.json();
      // console.log(content);

      // let me = await getMe();

      // console.log("me");
      // console.log(me);

      //SET RETAILER PREFS
      // let setPrefs = await setRetailerPref(
      //   me?.commerceToolsId as string,
      //   "BS30 6EL",
      //   20,
      //   false,
      //   true
      // );
      // let getPrefs = await getRetailerPref(me?.commerceToolsId as string);
      // console.log(getPrefs);

      // ACCEPT TOYKENS - TO DO @NICK
      //let transfer = await acceptToykens("0069", "", 10);
      // let customerId = '28e9c9dd-fd61-439f-ae38-161f98e92953';
      // let toykens = await getToykensForCustomer(customerId);
      // console.log(`User ${customerId} has ${toykens} toykens`);
      // toykens = await incrementToykensForCustomer(customerId);
      // toykens = await incrementToykensForCustomer(customerId);
      // toykens = await incrementToykensForCustomer(customerId);
      // toykens = await incrementToykensForCustomer(customerId);
      // toykens = await incrementToykensForCustomer(customerId);
      // toykens = await incrementToykensForCustomer(customerId);
      // console.log(`After increment User ${customerId} has ${JSON.stringify(toykens)} toykens`);
      // //toykens = await decrementToykensForCustomer(customerId);
      // console.log(`After decrement User ${customerId} has ${toykens} toykens`);
      // toykens = await getToykensForCustomer(customerId);
      // console.log(`User ${customerId} has ${toykens} toykens`);

      // GET DISTANCE FOR LOCAL OFFERS
      //let distance = await getDistance("BS312FJ", "BS306EL");
      //console.log(Math.round(distance as number) + "km");

      //window.location.replace(`/${getInitialLocale()}`);
    })();
  });

  const login = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "dave-retailer@gmail.com",
        password: "password",
      }),
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Retailer Portal - Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full md:w-96 lg:w-96">
        <Login />
      </main>
    </div>
  );
};

export default Home;
