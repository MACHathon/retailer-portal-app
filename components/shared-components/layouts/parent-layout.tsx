import { Fragment, ReactNode} from 'react';
import { NextPage } from 'next';

import ParentHeader from '@/components/dashboard/parent-dashboard/parent-header/parent-header';

interface Props {
    children: ReactNode
}

const ParentLayout: NextPage<Props> = ({ children }):JSX.Element => {

    return (
        <Fragment>
            <ParentHeader />
            { children }
        </Fragment>
    )

}

export default ParentLayout