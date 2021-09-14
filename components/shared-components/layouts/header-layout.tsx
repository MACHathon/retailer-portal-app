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
      flexDirection="row" width="60%" margin="3.5% auto"
      alignItems="left"
    >
      {children}
    </Box>
  );
};

export default HeaderLeyout;
