import { NextPage } from "next";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import ColourSection from "@/components/shared-components/sections/colour-section";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import { Box, Text } from "@chakra-ui/layout";
import SelectField from "@/components/shared-components/input-fields/select-field";
import { Image } from "@chakra-ui/image";
import { getCategories } from "packages/Commercetools/Categories/getCategories";
import { acceptToykens } from "packages/Commercetools/Toykens/acceptToykens";
import { Button } from "@chakra-ui/button";

type Category = {
  id: any;
  name: any;
};

const AcceptForm = (): JSX.Element => {
  const [createReward, setCreateReward] = useState<{
    name: string;
    cost: string;
    visibleFor: string;
  }>({
    name: "",
    cost: "",
    visibleFor: "",
  });

  
  const [numToykens, setNumToykens] = useState<string>("");
  const [childId, setChildId] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [itemTypes, setItemTypes] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      let categories = await getCategories();
      console.log(categories);
      setItemTypes(categories);
    })();
  }, []);

  const { name, cost, visibleFor } = createReward;

  const onHandleNumberToykenChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setNumToykens(value);
  };

  const onHandleChildIdChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setChildId(value);
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(childId);
    console.log(numToykens);
    let result = await acceptToykens(childId, "", +numToykens);
    setIsSuccess(true);
  };

  const handleBack = async () => {
    window.location.href = "/dashboard";
  };

  return (
    <>
      {isSuccess ? (
        <Box d="flex" flexDirection="column" width="40%" margin="auto">
          <Text
            fontFamily="Raleway"
            fontSize="38px"
            fontWeight="700"
            margin="auto"
          >
            Success!
          </Text>
          <Button
            bg="#EA6699"
            color="#fff"
            justifyContent="center"
            height="70px"
            min-width="200px"
            width="100%"
            borderRadius="10px"
            padding="24px 30px"
            margin="12px 0 12px auto"
            margin-left="auto"
            boxShadow="m"
            fontSize="20px"
            fontWeight="700"
            _hover={{ bg: "#2f5a74" }}
            onClick={handleBack}
          >
            Back to Dashboard &gt;
          </Button>
        </Box>
      ) : (
        <Box d="flex" flexDirection="column" width="40%" margin="auto">
          <Text
            fontFamily="Raleway"
            fontSize="38px"
            fontWeight="700"
            margin="auto"
          >
            Accept Toykens
          </Text>
          <Text
            fontFamily="Raleway"
            fontSize="20px"
            fontWeight="700"
            margin="auto 0 20px 0"
            text-opacity="50"
            textAlign="center"
          >
            If you are accepting Toykens in exchange or part exchange for goods
            or services please complete the transaction below
          </Text>
          <form onSubmit={onHandleSubmit}>
            <SelectField
              onChange={() => onHandleNumberToykenChange}
              options={itemTypes.map((type) => ({
                id: type.id,
                value: type.name["en-GB"],
              }))}
              placeholder="Type of Item"
            />
            <Box d="flex" flexDirection="row">
              <TextInputField
                isPassword={false}
                name="name"
                placeholder="Child ID"
                value={childId}
                onChange={onHandleChildIdChange}
                white={false}
              />
              <Image
                src="../../icons/qr-code-teddy.png"
                alt="qr-code"
                width="70px"
                height="70px"
                margin="auto"
                margin-right="24px"
              />
            </Box>
            <TextInputField
              isPassword={false}
              name="toykens"
              value={numToykens}
              placeholder="Number of Toykens to accept"
              onChange={onHandleNumberToykenChange}
              white={false}
            />

            <Box margin="auto">
              <SubmitField value="Accept Toykens" bgColor="#66B8EC" />
            </Box>
          </form>
        </Box>
      )}
    </>
  );
};

export default AcceptForm;
