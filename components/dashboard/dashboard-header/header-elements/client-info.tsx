import { Box, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import { motion } from 'framer-motion';

const ClientInfo: NextPage = ():JSX.Element => {

    const MotionText = motion(Text);
    const text = 'Hello Clara! (#0066)'

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.08
            }
        }
    }

    const letter = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <Box
            d='flex'
            width='100%'
            alignItems='center'
        >
            <Image
                src='../../images/clara-profile.png'
                objectFit='contain'
                width='85px'
                height='85px'
                borderRadius='50%'
            >
            </Image>
            <MotionText
                marginLeft='1%'
                fontFamily='Roboto Condensed'
                fontSize='44px'
                fontWeight='700'
                variants={ sentence }
                initial='hidden'
                animate='visible'
            >
               {
                    text.split('').map(( char, index ) => {
                        return (
                            <motion.span 
                                variants={ letter }
                                key={ index }
                            >
                                { char }
                            </motion.span>
                        )
                    })
                }   
            </MotionText>
        </Box>
    )
}

export default ClientInfo