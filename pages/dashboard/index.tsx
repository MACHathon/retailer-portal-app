import type { NextPage } from "next";
import { Card } from "types/card-type";
import { Box, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import { AiTwotoneStar } from "react-icons/ai";
import { RiUserHeartFill } from "react-icons/ri";
import { ParentSection } from "types/parent-section";
import { useRouter } from "next/router";
import RetailerLayout from "@/components/shared-components/layouts/retailer-layout";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeComponentRetailerDashboard } from "lib/types";
import { useEffect } from "react";
import { getRetailerPref } from "packages/Commercetools/Retailer/retailerPref";
import { getMe } from "packages/Commercetools/Users/getUser";

interface Props {
  cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  const router = useRouter();
  const [data, isLoading] = useContentfulData<TypeComponentRetailerDashboard>(
    "EusTaxiEB6z2XfT2RUmgN"
  );

  useEffect(() => {
    (async () => {
      let me = await getMe();
      console.log(me);
      let getPrefs = await getRetailerPref(me?.commerceToolsId as string);
      console.log(getPrefs);
    })();
  });

  const handleReviewClick = async () => {
    window.location.href = "/dashboard/review-section";
  };
  const handleAcceptToykensClick = async () => {
    window.location.href = "/dashboard/accept";
  };
  const handleManageMyAccountClick = () => {
    window.location.href = "dashboard/retail-sections/receive-form";
  }

  const onRedirectHandler = async () => {
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

    // Deleeting cookies... never easy
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    if (rawResponse.status == 200) {
      window.location.href = "/";
    }
  };

  return (
    <RetailerLayout>
      <Head>
        <title>Retail Portal - Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        d="flex"
        flexDirection="row"
        width="60%"
        margin="0 auto"
        height="100px"
      >
        <Box margin="auto auto auto 0">
          <Text fontSize="20px">
            {data?.fields?.offersToReviewLabel.replace(
              "{itemToReviewCount}",
              "10"
            )}
          </Text>
        </Box>
        <Button
          bg="#EA6699"
          color="#fff"
          justifyContent="center"
          height="70px"
          min-width="200px"
          width="200px"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px 0 12px auto"
          margin-left="auto"
          boxShadow="m"
          fontSize="20px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleReviewClick}
        >
          {data?.fields?.reviewCtaLabel} &gt;
        </Button>
      </Box>
      <Box
        d="flex"
        flexDirection="row"
        width="60%"
        margin="0 auto"
        height="100px"
      >
        <Box margin="auto auto auto 0">
          <Text fontSize="20px">{data?.fields?.acceptToykensLabel}</Text>
        </Box>
        <Button
          bg="#EA6699"
          color="#fff"
          justifyContent="center"
          height="70px"
          min-width="200px"
          width="200px"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px 0 12px auto"
          margin-left="auto"
          boxShadow="m"
          fontSize="20px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleAcceptToykensClick}
        >
          {data?.fields?.acceptToykensCtaLabel} &gt;
        </Button>
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        width="60%"
        margin="40px auto auto auto"
        height="100px"
      >
        <Button
          bg="#66B8EC"
          color="#fff"
          alignItems="center"
          justifyContent="center"
          height="70px"
          width="100%"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize="20px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleAcceptToykensClick}
        >
          {data?.fields?.myInventoryCtaLabel}
        </Button>
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        width="60%"
        margin="0 auto"
        height="70px"
      >
        <Button
          bg="#fff"
          color="#66B8EC"
          alignItems="center"
          justifyContent="center"
          height="70px"
          width="100%"
          border="1px"
          borderColor="#66B8EC"
          borderRadius="10px"
          padding="24px 30px"
          margin="12px auto"
          boxShadow="m"
          fontSize="20px"
          fontWeight="700"
          _hover={{ bg: "#2f5a74" }}
          onClick={handleManageMyAccountClick}
        >
          {data?.fields?.manageAccountCtaLabel}
        </Button>
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        width="60%"
        margin="0 auto"
        marginTop="20"
        height="70px"
      >
        <Button
          height="72px"
          backgroundColor="#ff7b7b"
          textColor="#FFF"
          onClick={onRedirectHandler}
          paddingLeft="30"
          paddingRight="30"
          width="200px"
        >
          Logout
        </Button>
      </Box>
    </RetailerLayout>
  );
};

export default ParentDashboard;
