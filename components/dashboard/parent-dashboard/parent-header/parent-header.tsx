import type { NextPage } from 'next';

import HeaderLeyout from '@/components/shared-components/layouts/header-layout';
import ClientInfo from '../../../shared-components/client-info/client-info';
import MessagesNotification from '@/components/dashboard/parent-dashboard/parent-header/header-element/messages-notification';

const ParentHeader: NextPage = ():JSX.Element => {

    return (
        <HeaderLeyout>
            <ClientInfo message='Welcome John'/>
            <MessagesNotification />
        </HeaderLeyout>
    )
}

export default ParentHeader