import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactNode, ReactElement } from "react"

interface Props {
    children: ReactNode
    onClick: () => void
    icon?: ReactElement
    bgColour?: string
}

const SectionButton: NextPage<Props> = ({ children, onClick, icon, bgColour }): JSX.Element => {
    return (
        <Box
            d='flex'
            alignItems='center'
            justifyContent='center'
            height='80px'
            width='100%'
            borderRadius='10px'
            padding='24px 30px'
            margin='12px auto'
            color='white'
            boxShadow='m'
            bg={ bgColour }
            _hover={{ bg: "#2f5a74" }}
            cursor='pointer'
            onClick={ onClick }
        >
            {
                icon &&
                <Box
                    fontSize='30px'
                    color='white'
                    width='32px'
                    height='32px'    
                    marginRight='30px'        
                >{ icon }</Box>
            }
            <Text
                fontFamily='Raleway'
                fontSize='24px'
                fontWeight='700'
            >
                { children }
            </Text>
        </Box>
    )
}

export default SectionButton