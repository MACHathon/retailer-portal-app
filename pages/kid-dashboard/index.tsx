import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import { getData } from 'utils/getData';
import { Card } from 'types/card-type';
import { Box } from '@chakra-ui/react';

import DashboardCard from '@/components/dashboard/kid-dashboard/dashboard-card/dashboard-card';
import DashboardLayout from '@/components/shared-components/layouts/dashboard-layout';

interface Props {
    cards: Card[];
}

const KidDashboard: NextPage<Props> = ({ cards }) => {

    const router = useRouter();
  
    return(       
        <DashboardLayout>
            <Head>
                <title>Child Portal - Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box 
                d='flex' 
                justifyContent='space-between' 
                mt='2' 
                alignItems='center'
                width='100%'
                margin='auto'
                flexWrap='wrap'
                paddingBottom='3%'
            >
                {
                    cards.map(card => <DashboardCard key={card.id} card={card}/>)
                }
            </Box>            
        </DashboardLayout>      
      )
}

export default KidDashboard;

export const getStaticProps = async () => {

    const data = await getData('card-test-data.json');
  
    if(!data) {
        return { 
            redirect: {
                destination: '/'
            }
         }
    }
  
    return{
        props: { cards: data.cards}
    }
  }