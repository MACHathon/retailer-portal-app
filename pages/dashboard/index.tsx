import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";
import { Fragment } from 'react';
import { getData } from 'utils/getData';
import { Card } from 'types/card-type';
import { Box } from '@chakra-ui/react';

import DashboardCard from '@/components/dashboard/dashboard-card/dashboard-card';
import DashboardHeader from '@/components/dashboard/dashboard-header/dashboard-header';

interface Props {
    cards: Card[];
}

const Dashboard: NextPage<Props> = ({ cards }) => {

    const router = useRouter();
  
    return(       
        <Fragment>
            <Head>
                <title>Child Portal - Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardHeader />
            <Box 
                d='flex' 
                justifyContent='space-between' 
                mt='2' 
                alignItems='center'
                width='80%'
                margin='auto'
                flexWrap='wrap'
                paddingBottom='3%'
            >
                {
                    cards.map(card => <DashboardCard key={card.id} card={card}/>)
                }
            </Box>            
        </Fragment>      
      )
}

export default Dashboard;

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