import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

import ClientInfo from './header-elements/client-info';
import ToykenInfo from './header-elements/toyken-info';


const DashboardHeader: NextPage = ():JSX.Element => {

    return (
        <Box
            d='flex'
            width='100%'
            margin='3.5% auto'
            justifyContent='space-between'
            alignItems='center'
        >
            <ClientInfo />
            <ToykenInfo />
        </Box>
    )
}

export default DashboardHeader