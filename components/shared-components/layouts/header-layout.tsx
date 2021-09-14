import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeaderLeyout: NextPage<Props> = ({ children }): JSX.Element => {
  return (
    <Box
      d="flex"
      width="100%"
      margin="3.5% auto"
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export default HeaderLeyout;
