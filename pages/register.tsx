import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignUp from "../components/signup/signup";
import { Box, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  
  return (
    <Box d="flex" flexDirection="column" paddingTop="20" alignItems="center" width="100%" marginTop="0">
      <Head>
        <title>Toykens Retailer</title>
        <meta name="description" content="Toyken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1" size="lg" marginBottom="8">
       Register as a retailer
      </Heading>
      <main className="w-full md:w-96 lg:w-96">
        <SignUp />
      </main>
    </Box>
  );
};

export default Home;
