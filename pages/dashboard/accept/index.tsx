import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

import HeaderLeyout from "@/components/shared-components/layouts/header-layout";
import ReviewHeader from "@/components/shared-components/review-section-header/review-header";
import ClientInfo from "@/components/shared-components/client-info/client-info";

import ReviewList from "@/components/shared-components/sections-list/review-list";
import AcceptForm from "@/components/dashboard/retail-dashboard/accept-form";
import React from "react";
import MessagesNotification from "@/components/dashboard/retail-dashboard/header-element/messages-notification";


const MyInventory: NextPage = (): JSX.Element => {
  const onRejectHandler = (type: string) => {
    console.log(type);
  };

  const onAddHandler = (type: string) => {
    console.log(type);
  };

  return (
    <Box margin="50px 0">
      <HeaderLeyout>
      </HeaderLeyout>
      <AcceptForm />
    </Box>
  );
};

export default MyInventory;
