import { IconButton } from "@chakra-ui/react";
import { NextPage } from "next";
import { ReactElement } from "react";

interface Props {
    bgColour: string,
    width: string,
    height: string,
    destinationHandler?:() => void
    icon: ReactElement
}

const CustomIconButton: NextPage<Props> = ({ bgColour, width, height, destinationHandler, icon }): JSX.Element => {

    return (
        <IconButton
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
        />
    )
}

export default CustomIconButton