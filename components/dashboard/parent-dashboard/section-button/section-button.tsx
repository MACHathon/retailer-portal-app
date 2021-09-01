import { Box, IconButton } from "@chakra-ui/react"
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
            height='80px'
            width='100%'
            borderRadius='10px'
            padding='24px 30px'
            margin='12px auto'
            bg='#66B8EC'
            color='white'
            boxShadow='m'
            _hover={{ bg: "#2f5a74" }}
            onClick={ onClick }
        >
            {
                icon &&
                <IconButton
                    aria-label="Go to"
                    fontSize='30px'
                    color='white'
                    boxShadow='xl'
                    borderRadius='lg'
                    width='32px'
                    height='32px'
                    bg={ bgColour }
                    icon={ icon }
                />
            }
           { children }
        </Box>
    )
}

export default SectionButton