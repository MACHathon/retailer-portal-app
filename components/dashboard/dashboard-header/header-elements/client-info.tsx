import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"

const ClientInfo: NextPage = ():JSX.Element => {

    return (
        <Box
            d='flex'
            width='100%'
            alignItems='center'
        >
            <Box
                width='85px'
                height='85px'
                borderRadius='50%'
                bg='#F6D396' 
            >
            </Box>
            <Text
                marginLeft='1%'
                fontFamily='Roboto Condensed'
                fontSize='44px'
                fontWeight='700'
            >
                Hello Clara! (#0066)
            </Text>
        </Box>
    )
}

export default ClientInfo