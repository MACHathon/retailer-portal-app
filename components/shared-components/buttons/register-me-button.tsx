import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const RegisterMeButton: NextPage<Props> = ({
  children,
  onClick,
}): JSX.Element => {
  return (
    <Button
      height="70px"
      width="100%"
      borderRadius="10px"
      padding="24px 32px"
      margin="12px auto"
      bg="#fff"
      border="1px"
      borderColor="#66B8EC"
      color="#66B8EC"
      boxShadow="m"
      _hover={{ bg: "#2f5a74" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default RegisterMeButton;
