import { Box, Text, Image } from "@chakra-ui/react"
import { NextPage } from "next"

const ToykenInfo: NextPage = ():JSX.Element => {

    return (
      <Box
        d='flex'
        alignItems='center'
        bg='#66B8EC'
        width='155px'
        height='50px'
        borderRadius='70px'
        padding='6px'
      >
          <Text
             fontFamily='Raleway'
             fontSize='24px'
             fontWeight='700'
             padding='5px 14px'
             color='white'
          >
                102
          </Text>
          <Box
            d='flex'
            justifyContent='center'
            alignItems='center'
            bg='#ACD9F0'
            width='75px'
            height='45px'
            borderRadius='70px'
          >
            <Image src="../../icons/toyken-single.png" alt="coin" height='38px' width='38px' />
          </Box>
      </Box>
    )
}
export default ToykenInfo