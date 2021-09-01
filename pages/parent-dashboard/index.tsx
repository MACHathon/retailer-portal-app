import type { NextPage } from 'next';
import { Card } from 'types/card-type';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { AiTwotoneStar } from 'react-icons/ai'
import { RiUserHeartFill } from 'react-icons/ri'
// import { getData } from 'utils/getData';

import ParentLayout from '@/components/shared-components/layouts/parent-layout';
import SectionButton from '@/components/dashboard/parent-dashboard/section-button/section-button';

interface Props {
    cards: Card[];
}

const ParentDashboard: NextPage<Props> = ({ cards }) => {
  
    return(       
        <ParentLayout>
            <Head>
                <title>Parent Portal - Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                d='flex'
                flexDirection='column'
                width='50%'
                margin='15% auto'
            >
                <SectionButton 
                    icon={<AiTwotoneStar />} 
                    bgColour={'#66B8EC'}
                    onClick={() => {}} 
                >
                    Create Rewards for my children
                </SectionButton>

                <SectionButton 
                    icon={<RiUserHeartFill />} 
                    bgColour={'#EA6699'}
                    onClick={() => {}} 
                >
                    Manage Accounts
                </SectionButton>
            </Box>
        </ParentLayout>
      )
}

export default ParentDashboard;

// export const getStaticProps = async () => {

//     const data = await getData('card-test-data.json');
  
//     if(!data) {
//         return { 
//             redirect: {
//                 destination: '/'
//             }
//          }
//     }
  
//     return{
//         props: { cards: data.cards}
//     }
// }