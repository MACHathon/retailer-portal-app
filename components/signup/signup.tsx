import { Box } from "@chakra-ui/react";
import {
  CustomFields,
  FieldContainer,
  TypeReference,
} from "@commercetools/platform-sdk/dist/generated/models/type";
import { setRetailerPref } from "packages/Commercetools/Retailer/retailerPref";
import { getMe } from "packages/Commercetools/Users/getUser";
import React, { useState, useEffect } from "react";
import { AnonUserClient } from "../../packages/Commercetools/Clients/APIClient"

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [retailerName, setRetailerName] = React.useState<string>("");
  const [postcode, setPostcode] = React.useState<string>("");

  
  const [isWaiting, setIsWaiting] = React.useState<boolean>(false);
  const [signUpcomplete, setIsLoggedIn] = React.useState<boolean>(false);
  const [isError, setIsError] = React.useState<boolean>(false);


  const handleSignUpClick = () => {
    (async () => {

      let response = await AnonUserClient.me()
        .signup()
        .post({
          body: {
            email: email,
            password: password,
            companyName: retailerName,
            addresses: [
              {
                postalCode: postcode,
                country: "UK"     // Future TODO country input. 
              },
            ]
          },
        })
        .execute();      

        if (response.statusCode == 201) {

          let me = await getMe();

          // Set some default prefs
          let setPrefs = await setRetailerPref(
            me?.commerceToolsId as string,
            postcode,
            20,
            false,
            true
          );

          setIsLoggedIn(true);
          setIsWaiting(false);
        } else {
          setIsWaiting(false);
          setIsError(true);
        }
    })();
  };

  const handleRetailerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRetailerName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePostcodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostcode(event.target.value);
  };

  return (
    <>
      {isWaiting ? (
        <h1>Loading spinner here...</h1>
      ) : signUpcomplete ? (
        <h1>Success!</h1>
      ) : (
        <Box d="flex" flexDirection="column" width="100%" marginTop="0">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="name"
            >
              Business / Charity name
            </label>
            <input
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              id="name"
              onChange={handleRetailerNameChange}
              placeholder="Business / Charity name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Email address
            </label>
            <input
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              id="email"
              onChange={handleEmailChange}
              placeholder="Email address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              id="password"
              onChange={handlePasswordChange}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="postcode"
            >
              Postcode
            </label>
            <input
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              id="postcode"
              onChange={handlePostcodeChange}
              placeholder="Postcode"
            />
          </div>
        
         
          <div className="flex items-center justify-between">
            <button
              className="w-full bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSignUpClick}
            >
              Create account
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
              {isError ? <div>Error...</div> : null}
            </p>
          </div>
        </Box>
      )}
    </>
  );
};

export default SignUp;
