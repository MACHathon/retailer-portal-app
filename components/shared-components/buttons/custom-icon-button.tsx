import { IconButton } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactElement } from "react";
import { motion } from 'framer-motion';

interface Props {
    bgColour: string,
    width: string,
    height: string,
    destinationHandler?:() => void
    icon: ReactElement
}

const CustomIconButton: NextPage<Props> = ({ bgColour, width, height, destinationHandler, icon }): JSX.Element => {

    const MotionIconButton = motion(IconButton)

    return (
        <MotionIconButton
            aria-label="Go to"
            fontSize='30px'
            color='white'
            boxShadow='xl'
            borderRadius='lg'
            bg={ bgColour }
            width={ width }
            height={ height }
            icon={ icon }
            onClick={destinationHandler}
            whileHover={{
                scale: .9,
                transition: { duration: .2 },
              }}
              whileTap={{ scale: 1.04 }}
        />
    )
}

export default CustomIconButton