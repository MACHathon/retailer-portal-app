import type { NextPage } from "next";
import { getData } from "utils/getData";
import dynamic from 'next/dynamic'
import { Card } from "types/card-type";
import { Box } from "@chakra-ui/react";

import DashboardCard from "@/components/dashboard/dashboard-card/dashboard-card";
import DashboardLayout from "@/components/shared-components/layouts/dashboard-layout";

interface Props {
    card: Card;
}

const DashboardSection: NextPage<Props> = ({ card }) => {

    const onSectionSwitch = (section: string): JSX.Element => {
        switch(section){
            case '1': {
                const DonateItems = dynamic(() => import("@/components/dashboard/dashboard-sections/donate-items") as any , { ssr: false })
                return <DonateItems />
            };
            case '2': {
                const SpendToykens = dynamic(() => import("@/components/dashboard/dashboard-sections/spend-toykens") as any, { ssr: false } )
                return <SpendToykens />
            };
            case '3': {
                const ChooseRewards = dynamic(() => import("@/components/dashboard/dashboard-sections/choose-rewards") as any, { ssr: false } )
                return <ChooseRewards />
            };
            case '4': {
                const ToykenTrails = dynamic(() => import("@/components/dashboard/dashboard-sections/toyken-trails") as any, { ssr: false } )
                return <ToykenTrails />
            };
            default: throw new Error('Unknown section type'); 
        }
    }

    return (
        <DashboardLayout>           
            <Box
                d='flex' 
                mt='2' 
                width='100%'
                margin='auto'
                overflow='hidden'
                borderRadius='10px'
            >
                <Box flex='1'>
                    <DashboardCard key={card.id} card={card} />
                </Box>
                { onSectionSwitch(card.id) }
            </Box>
        </DashboardLayout>
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