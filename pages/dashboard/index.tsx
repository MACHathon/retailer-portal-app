import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from "next/router";

import DashboardCard from '@/components/dashboard/dashboard-card/dashboard-card';
import DashboardHeader from '@/components/dashboard/dashboard-header/dashboard-header';
import { getData } from 'utils/getData';
import { Card } from 'types/card-type';

interface Props {
    cards: Card[];
}

const Dashboard: NextPage<Props> = ({ cards }) => {

    const router = useRouter();
  
    return(       
        <div>
            <Head>
                <title>Child Portal - Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardHeader />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                {
                    cards.map(card => <DashboardCard key={card.id} card={card}/>)
                }
            </div>            
        </div>      
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