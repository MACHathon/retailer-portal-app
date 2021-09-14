import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

import ColourSection from "@/components/shared-components/sections/colour-section";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import { Box, Text } from "@chakra-ui/layout";
import SelectField from "@/components/shared-components/input-fields/select-field";
import { Image } from "@chakra-ui/image";

// interface Props {
//   onCreateRewardHandler: (reward: {
//     name: string;
//     cost: string;
//     visibleFor: string;
//   }) => void;
//   onSectionSwitch: () => void;
// }

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

  const { name, cost, visibleFor } = createReward;

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
  };

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {};
  return (
    <Box d="flex" flexDirection="column" width="40%" margin="auto">
      <Text fontFamily="Raleway" fontSize="38px" fontWeight="700" margin="auto">
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
        If you are accepting Toykens in exchange or part exchange for goods or
        services please complete the transaction below
      </Text>
      <form onSubmit={onHandleSubmit}>
        <SelectField
          onChange={() => onHandleChange}
          options={[]}
          placeholder="Type of Item"
        />
        <Box d="flex" flexDirectio="row">
          <TextInputField
            isPassword={false}
            name="name"
            placeholder="Child ID"
            value={name}
            onChange={onHandleChange}
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
        <SelectField
          onChange={() => onHandleChange}
          options={[]}
          placeholder="Number of Toykens to accept"
        />

        <Box margin="auto">
          <SubmitField value="Accept Toykens" bgColor="#66B8EC" />
        </Box>
      </form>
    </Box>
  );
};

export default AcceptForm;
