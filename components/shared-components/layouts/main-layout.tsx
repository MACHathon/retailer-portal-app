import { ReactNode} from 'react';
import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import MainHeader from '@/components/shared-components/header/main-header';

interface Props {
    children: ReactNode
}

const MainLayout: NextPage<Props> = ({ children }):JSX.Element => {

    return (
        <Box 
            paddingTop='2%'
            width='100%'
            height='100%'
            minHeight='100vh'
            bg='#FFF9E4'
        >
            <MainHeader />
            { children }
        </Box>
    )

}

export default MainLayout