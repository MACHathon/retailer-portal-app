import { Button } from "@chakra-ui/react"
import { NextPage } from "next"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClick: () => void;
}

const ConfirmButton: NextPage<Props> = ({ children, onClick }): JSX.Element => {

    return (
        <Button
            height='70px'
            width='100%'
            borderRadius='10px'
            padding='24px 32px'
            margin='12px auto'
            bg='#66B8EC'
            color='white'
            boxShadow='xl'
            onClick={ onClick }
        >
            { children }
        </Button>
    )
}

export default ConfirmButton