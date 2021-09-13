import type { NextPage } from "next";
import { Card } from "types/card-type";
import { Box, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import { AiTwotoneStar } from "react-icons/ai";
import { RiUserHeartFill } from "react-icons/ri";
import SectionButton from "@/components/dashboard/parent-dashboard/parent-sections/section-button/section-button";
import { ParentSection } from "types/parent-section";
import { useRouter } from "next/router";
import RetailerLayout from "@/components/shared-components/layouts/retailer-layout";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeComponentRetailerDashboard } from "lib/types";

interface Props {
  cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  const router = useRouter();
  const [data, isLoading] = useContentfulData<TypeComponentRetailerDashboard>(
    "EusTaxiEB6z2XfT2RUmgN"
  );

  const handleReviewClick = async () => {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (rawResponse.status == 200) {
      window.location.href = "/";
    }
  };
  const handleAcceptTpykensClick = async () => {
    const rawResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (rawResponse.status == 200) {
      window.location.href = "/";
    }
  };

  return (
    <RetailerLayout>
      <Head>
        <title>Parent Portal - Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box d="flex" flexDirection="row" width="50%" margin="0 auto">
        <Box margin="auto" paddingwidth="75%">
          {data?.fields?.offersToReviewLabel}
        </Box>
        <Button
          bg="#EA6699"
          color="#fff"
          justifyContent="center"
          height="60px"
          width="40%"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          margin-left="auto"
          boxShadow="m"
          fontSize="24px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleReviewClick}
        >
          {data?.fields?.reviewCtaLabel} >
        </Button>
      </Box>
      <Box d="flex" flexDirection="row" width="50%" margin="0 auto">
        <Box margin="auto" paddingwidth="75%">
          {data?.fields?.acceptToykensLabel}
        </Box>
        <Button
          bg="#EA6699"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          height="60px"
          width="100%"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize="24px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleAcceptTpykensClick}
        >
          {data?.fields?.acceptToykensCtaLabel} >
        </Button>
      </Box>
      <Box d="flex" flexDirection="column" width="50%" margin="0 auto">
        <Button
          bg="#66B8EC"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          height="60px"
          width="100%"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize="24px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleAcceptTpykensClick}
        >
          {data?.fields?.myInventoryCtaLabel}
        </Button>
      </Box>
      <Box d="flex" flexDirection="column" width="50%" margin="0 auto">
        <Button
          bg="#fff"
          color="#66B8EC"
          alignItems="center"
          justifyContent="center"
          height="60px"
          width="100%"
          border="1px"
          borderColor="#66B8EC"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize="24px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleAcceptTpykensClick}
        >
          {data?.fields?.manageAccountCtaLabel}
        </Button>
      </Box>
    </RetailerLayout>
  );
};

export default ParentDashboard;