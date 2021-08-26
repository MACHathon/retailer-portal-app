import type { NextPage } from 'next';
import { useRouter } from "next/router";

import DashboardCard from '@/components/dashboard/dashboard-card/dashboard-card';
import DashboardHeader from '@/components/dashboard/dashboard-header/dashboard-header';

const Dashboard: NextPage = () => {

    const router = useRouter();
  
    return(
        <div>
            <DashboardHeader />
            <DashboardCard />
        </div>      
      )
}

export default Dashboard;