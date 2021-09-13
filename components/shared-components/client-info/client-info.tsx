import { Box, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import { motion } from "framer-motion";

interface Props {
  image?: string;
  message: string;
}

const ClientInfo: NextPage<Props> = ({ image, message }): JSX.Element => {
  const MotionText = motion(Text);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box d="flex" width="75%" alignItems="center">
      {image && (
        <Image
          src={image}
          objectFit="contain"
          width="85px"
          height="85px"
          borderRadius="50%"
        ></Image>
      )}
      <MotionText
        marginLeft="1%"
        fontFamily="Raleway"
        fontSize="30px"
        fontWeight="700"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {message.split("").map((char, index) => {
          return (
            <motion.span variants={letter} key={index}>
              {char}
            </motion.span>
          );
        })}
      </MotionText>
    </Box>
  );
};

export default ClientInfo;
