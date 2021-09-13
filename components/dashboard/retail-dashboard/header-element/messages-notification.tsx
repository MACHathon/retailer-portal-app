import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useContentfulData } from "@/components/hooks/useContentfulData";
import { TypeComponentRetailerDashboard } from "lib/types";

const MessagesNotification: NextPage = (): JSX.Element => {
  const { asPath } = useRouter();
  const currentPath = asPath === "/dashboard" ? true : false;
  const [data, isLoading] = useContentfulData<TypeComponentRetailerDashboard>(
    "EusTaxiEB6z2XfT2RUmgN"
  );

  const MotionImage = motion(Image);

  return (
    <Box
      d="flex"
      justifyContent="flex-end"
      width="240px"
      height="40px"
      alignItems="center"
      cursor="pointer"
    >
      {currentPath && (
        <Text
          fontFamily="Raleway"
          fontSize="16px"
          fontWeight="700"
          marginRight="15px"
          color="#66B8EC"
        >
          {data?.fields?.notificationLabel}
        </Text>
      )}
      <MotionImage
        whileHover={{
          rotate: [0, 45, 0 - 45, -90, -45, 0],
          transition: { duration: 1, repeat: 2 },
        }}
        src="../../icons/notification-bell.svg"
        alt="msg"
        height="38px"
        width="38px"
      />
    </Box>
  );
};

export default MessagesNotification;
