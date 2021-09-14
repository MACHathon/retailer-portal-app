import { Box } from "@chakra-ui/react";
import { NextPage } from "next";

import HeaderLeyout from "@/components/shared-components/layouts/header-layout";
import ReviewHeader from "@/components/shared-components/review-section-header/review-header";
import ClientInfo from "@/components/shared-components/client-info/client-info";

import ReviewList from "@/components/shared-components/sections-list/review-list";
import AcceptForm from "@/components/dashboard/retail-dashboard/accept-form";
import React from "react";
import MessagesNotification from "@/components/dashboard/retail-dashboard/header-element/messages-notification";

const myItems = [
  {
    id: "1",
    name: "Transformer White/Blue",
    image: "../../images/toy-example-image.png",
    type: "Plastic Toy",
    condition: "New",
    deliver: true,
    collection: true,
    drop_locally: true,
  },
  {
    id: "2",
    name: "Transformer Optimus Prime",
    image: "../../images/toy-example-image.png",
    type: "Plastic Toy",
    condition: "New",
    deliver: false,
    collection: true,
    drop_locally: true,
  },
  {
    id: "3",
    name: "Transformer Optimus Prime",
    image: "../../images/toy-example-image.png",
    type: "Plastic Toy",
    condition: "New",
    deliver: true,
    collection: false,
    drop_locally: false,
  },
  {
    id: "4",
    name: "Transformer White/Blue",
    image: "../../images/toy-example-image.png",
    type: "Plastic Toy",
    condition: "Used",
    deliver: false,
    collection: true,
    drop_locally: true,
  },
];

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
        <ClientInfo message="My Inventory" />
        <MessagesNotification />
      </HeaderLeyout>
      <AcceptForm />
    </Box>
  );
};

export default MyInventory;
