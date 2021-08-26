import type { NextPage } from "next";
import { getData } from "utils/getData";

import DashboardCard from "@/components/dashboard/dashboard-card/dashboard-card";
import { Card } from "types/card-type";

interface Props {
    card: Card;
}

const DashboardSection: NextPage<Props> = ({ card }) => {

    return (
        <div>
            <DashboardCard key={card.id} card={card} />
        </div>
    )

}

export default DashboardSection;

export const getStaticProps = async (ctx: any) => {

    const type = ctx.params.type;

    const data = await getData('card-test-data.json');
    const card = data.cards.find( (item: Card) => item.id === type );

    if(!card) {
        return { notFound: true }
    }

    return{
        props: { card }
    }
}

export const getStaticPaths = async () => {

    const data = await getData('card-test-data.json');
    const types = data.cards.map((item: Card) => ({params: { type: item.id }}));

    return{
        paths: types,
        fallback: false
    }
}