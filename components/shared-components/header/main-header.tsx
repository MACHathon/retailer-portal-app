import { Box, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { FiLogOut } from 'react-icons/fi'
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 

import DropDownSelector from "@/components/shared-components/header/drop-down-selector";

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

const MainHeader: NextPage = ():JSX.Element => {

    const isLoggedIn: boolean = false;

    return (
        <Box
            width='100%'
            margin='auto'
            d='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Box
                d='flex'
                alignItems='center'
            >
                {
                    !isLoggedIn 
                    ? <Image src="../../icons/toyken-logo.svg" alt="logo" width='175px' height='45px'/>
                    : <Box  
                        d='flex'
                        alignItems='center'
                        fontSize='26'
                        fontWeight='700'
                        fontFamily='Roboto Condensed'
                        color='#EA6699'
                        cursor='pointer'
                      >
                        <span><FiLogOut /></span>
                        <Text marginLeft='12px'>Logout</Text>
                     </Box>
                }                
            </Box>
            <DropDownSelector />
        </Box>
    )

}

export default MainHeader