import { Fragment, ReactNode} from 'react';
import { NextPage } from 'next';

import DashboardHeader from '@/components/dashboard/kid-dashboard/dashboard-header/dashboard-header';

interface Props {
    children: ReactNode
}

const DashboardLayout: NextPage<Props> = ({ children }):JSX.Element => {

    return (
        <Fragment>
            <DashboardHeader />
            { children }
        </Fragment>
    )

}

export default DashboardLayout