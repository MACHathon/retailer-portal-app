import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Card } from 'types/card-type';

interface Props {
    card: Card;
}
const DashboardCard: NextPage<Props> = ({ card }) => {

    const router = useRouter();

    return (
        <div onClick={() => router.push(`dashboard/section/${card.id}`)}>
            <p>{ card.image }</p>
            <h3>{ card.title }</h3>
            <p>{ card.context }</p>
            <p>Button</p>
        </div>
    )
}

export default DashboardCard