import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Text } from "@chakra-ui/react";
import CustomIconButton from '@/components/shared-components/buttons/custom-icon-button';
import { HiArrowNarrowRight, HiX } from 'react-icons/hi';

import { Card } from 'types/card-type';

interface Props {
    card: Card
}
const DashboardCard: NextPage<Props> = ({ card }): JSX.Element  => {

    const router = useRouter();
    const { asPath } = useRouter()
    const currentPath = asPath === '/dashboard' ? true : false
    
    const onRedirectHandler = (): void => {
        if(currentPath){
            router.push(`dashboard/section/${card.id}`)
        }else {
            router.push('/dashboard')
        }
    }

    return (
        <Box 
            d='flex'
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'
            bg={ card.colour } 
            borderRadius='lg'
            width='326px' 
            height='652px' 
            fontFamily='Roboto Condensed'
            lineHeight='1.2'  
            marginBottom='15px'
            padding={6} 
        >
            <p>{ card.image }</p>
            <Text 
                width='80%'
                fontSize='44px' 
                fontWeight='bold'                            
                align='center'
            >
                { card.title }
            </Text>
            <Text
                fontSize='24px' 
                fontWeight='400'
                align='center'
            >
                { card.context }
            </Text>
            <CustomIconButton 
                width='72px'
                height='72px'
                bgColour={card.secondColour}
                icon={currentPath ? <HiArrowNarrowRight/> : <HiX />}
                destinationHandler={onRedirectHandler}
            />
        </Box>
    )
}

export default DashboardCard