import React, { useState, useEffect } from "react";
import { LoggedInUserClient } from "../../packages/Commercetools/Clients/APIClient";
import { Box, Image, Text } from "@chakra-ui/react";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import ConfirmButton from "@/components/shared-components/buttons/confirm-button";
import { useRouter } from "next/router";
import ImageFooter from "../shared-components/image-footer/image-footer";
import { useContentfulData } from "../hooks/useContentfulData";
import { TypeChildHomepage } from "lib/types";
import RegisterMeButton from "../shared-components/buttons/register-me-button";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const router = useRouter();
  const { asPath } = useRouter();

  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  const [data, isLoading] = useContentfulData<TypeChildHomepage>(
    "4cS7JUzLdGq5SLfiZ04kjq"
  );

  useEffect(() => {
    LoggedInUserClient.me()
      .get()
      .execute()
      .then((response: any) => {
        if (!!response?.body?.id) {
          console.log(response);
          //router.push('/dashboard');
        }
      })
      .catch((error) => {
        console.log(error);
        setIsWaiting(false);
      });
  }, []);

  const handleRegisterClick = () => {
    window.location.href = "/register";
  }

  const handleLoginClick = () => {
    (async () => {
      const rawResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      if (rawResponse.status != 200) {
        setIsError(true);
      } else {
        const content = await rawResponse.json();

        if (!!content?.access_token) {
          window.location.href = "/dashboard";
          setIsWaiting(false);
        }
      }
    })();
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isWaiting ? (
        <h1>Loading spinner here...</h1>
      ) : isLoggedIn ? (
        <h1>Logged in</h1>
      ) : (
        <Box d="flex" flexDirection="column" width="100%">
          <Text
            width="100%"
            fontSize="24px"
            fontWeight="bold"
            align="center"
            paddingBottom="2"
          >
            Welcome to the Retailer portal
          </Text>
          <TextInputField
            isPassword={false}
            onChange={handleUsernameChange}
            placeholder={data?.fields?.emailInputLabel}
          />
          <TextInputField
            isPassword={true}
            onChange={handlePasswordChange}
            placeholder={data?.fields?.passwordInputLabel}
          />
          <ConfirmButton onClick={handleLoginClick}>Login</ConfirmButton>
          {isError ? <div>Invalid credentials</div> : null}

          <Text
            width="100%"
            fontSize="24px"
            fontWeight="bold"
            align="center"
            paddingBottom="2"
          >
            - or -
          </Text>
          <RegisterMeButton onClick={handleRegisterClick}>
            Apply to become a Toyken Retailer
          </RegisterMeButton>
          {isError ? <div>Invalid credentials</div> : null}
        </Box>
      )}
    </>
  );
};

export default Login;
