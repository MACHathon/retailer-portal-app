import React, { useState, useEffect } from "react";
import { LoggedInUserClient } from "../../lib/Commercetools/Clients/APIClient";
import { Box, Image, Text } from "@chakra-ui/react";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import ConfirmButton from "@/components/shared-components/buttons/confirm-button";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isWaiting, setIsWaiting] = React.useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);

  useEffect(() => {
    LoggedInUserClient.me()
      .get()
      .execute()
      .then((response: any) => {
        if (!!response?.body?.id) {
          console.log(response);
          setIsLoggedIn(true);
          setIsWaiting(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsWaiting(false);
      });
  }, []);

  const handleLoginClick = () => { 
    (async () => {
      const rawResponse = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (rawResponse.status != 200) {
        setIsError(true);
      } else {
        const content = await rawResponse.json();

        if (!!content?.access_token) {
          setIsLoggedIn(true);
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
        <Box
          d='flex'
          flexDirection='column'
          width='100%'
        >
          <Text 
            width='100%'
            fontSize='24px' 
            fontWeight='bold'                            
            align='center'
            paddingBottom='2'
          >
            Child login
          </Text>
          <TextInputField isPassword={false} onChange={handleUsernameChange} placeholder="Username" />
          <TextInputField isPassword={true} onChange={handlePasswordChange} placeholder="Password" />
          <ConfirmButton onClick={handleLoginClick}>Login</ConfirmButton>
          {isError ? <div>Invalid credentials</div> : null}
        </Box>
      )}
    </>
  );
};

export default Login;
