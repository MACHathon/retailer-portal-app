import { Box, Image, Text } from "@chakra-ui/react"
import { NextPage } from "next"

const MessagesNotification: NextPage = (): JSX.Element => {
    return (
        <Box
            d='flex'
            justifyContent='flex-end'
            width='240px'
            height='40px'
            alignItems='center'
        >
            <Text
                fontFamily='Raleway'
                fontSize='20px'
                fontWeight='700'
                marginRight='15px'
                color='#66B8EC'
            >
                1 new message
            </Text>
            <Image src='../../icons/notification-bell.svg' alt='msg' height='38px' width='38px' />
        </Box>
    )
}

export default MessagesNotification