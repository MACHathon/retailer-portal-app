import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";

interface Props {
    message: string;
    type: string;   
}

//WIP
const NotificationMessage: NextPage<Props> = ({ message, type }) => {

    return (
        <Box
            bg={ type==='alert' ? 'red.200' : 'green.100'}
        >
            <Text>{ message }</Text>              
        </Box>      
    )
}

export default NotificationMessage;