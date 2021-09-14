import { NextPage } from "next";
import { Fragment } from "react";
import { IoCloseOutline, IoCheckmarkOutline } from 'react-icons/io5'

import { Box, Text, Image } from "@chakra-ui/react";
import { Item } from "pages/dashboard/review-section";

interface Props {
    items: Item[]
    onRejectHandler: (type: string) => void
    onAddHandler: (type: string) => void
    buttonLabels?: boolean
}

const ReviewList: NextPage<Props> = ({ items, onAddHandler, onRejectHandler, buttonLabels}): JSX.Element => {

    return (
        <Fragment>
        {
            items &&
            items.map((item: Item) => {
                return (
                    <Box
                        key={ item.commercetoolsProductId }
                        d='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        height='190px'
                        width='100%'
                        bg='white'
                        borderRadius='20px'
                        marginBottom='2%'
                        overflow='hidden'
                        marginTop='30px'
                        boxShadow='xl'
                    >
                        <Box
                            fontFamily='Raleway'
                            fontWeight='700'
                            d='flex'
                            justifyContent='space-between'
                            alignItems='center'                       
                        >
                            <Image
                                src={item.image}
                                marginRight='30px'
                                objectFit='contain'
                                width='185px'
                                height='185px'
                            />
                            <Box
                                d='flex'
                                flexDirection='column'
                                alignItems='flex-start'
                                padding='25px 0'
                            >
                                <Text
                                    fontSize='30px'
                                    color='#333333'
                                > 
                                    { item.name } ({Math.round(item.distanceKM)}km away)
                                </Text>
                                <Text
                                    fontSize='18px'
                                    color='#333333'
                                    marginBottom="10px"
                                > 
                                    { item.description } 
                                </Text>
                                <Box
                                    d='flex'
                                    alignItems='center'
                                >
                                    <Text
                                        fontSize='22px'
                                        color='#333333'
                                    > 
                                        Condition: 
                                    </Text>
                                    <Text
                                        fontSize='22px'
                                        color='#00BB29'
                                        marginLeft='5px'
                                    > 
                                        { (item.condition).toUpperCase() }
                                    </Text>
                                </Box>
                                <Box
                                    d='flex'
                                    marginTop='20px'
                                >
                                    {
                                         (item.allowedDeliveryOptions.indexOf("drop off locally ( within 5 miles )") > -1 || item.allowedDeliveryOptions.indexOf("deliver ( within 20 miles )") > -1)
                                         && <Text
                                                 fontSize='16px'
                                                 color='#333333'
                                                 bg='#E8E8E8'
                                                 padding='4px 8px'
                                                 textAlign='center'
                                                 marginRight='20px'
                                             >
                                                Donator will deliver
                                             </Text>

                                    }
                                    {
                                        item.allowedDeliveryOptions.indexOf("post (ill pay)") > -1
                                        && <Text
                                                fontSize='16px'
                                                color='#333333'
                                                bg='#E8E8E8'
                                                padding='4px 8px'
                                                textAlign='center'
                                                marginRight='20px'
                                            >
                                                Donator arranges delivery
                                            </Text>
                                    }
                                     {
                                        item.allowedDeliveryOptions.indexOf("post (retailer pays)") > -1
                                        && <Text
                                                fontSize='16px'
                                                color='#333333'
                                                bg='#E8E8E8'
                                                padding='4px 8px'
                                                textAlign='center'
                                                marginRight='20px'
                                            >
                                                Retailer arranges postage
                                            </Text>
                                    }
                                      
                                     {
                                        item.allowedDeliveryOptions.indexOf("collection") > -1
                                        && <Text
                                                fontSize='16px'
                                                color='#333333'
                                                bg='#E8E8E8'
                                                padding='4px 8px'
                                                textAlign='center'
                                                marginRight='20px'
                                            >
                                                Local collection
                                            </Text>
                                    }
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            height='100%'
                        >
                            <Box
                                bg='#00BB29'
                                width='155px'
                                height='50%'
                                color='white'
                                cursor='pointer'
                                d='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='50px'
                                padding='6px'
                                onClick={() => onAddHandler('add')}
                            >
                                <IoCheckmarkOutline />
                                {
                                    buttonLabels
                                    &&
                                    <Text
                                        fontSize='14px'
                                        textAlign='center'
                                    >
                                        Mark as received
                                    </Text>
                                }
                            </Box>
                            <Box
                                bg='#EE0000'
                                width='155px'
                                height='50%'
                                color='white'
                                cursor='pointer'
                                d='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='center'
                                fontSize='50px'
                                padding='6px'
                                onClick={() => onRejectHandler('reject')}
                            >
                                <IoCloseOutline />
                                {
                                    buttonLabels
                                    &&
                                    <Text
                                        fontSize='14px'
                                        textAlign='center'
                                    >
                                        I’ve changed my mind
                                    </Text>
                                }
                            </Box>
                        </Box>
                    </Box>
                )
            })
        }
    </Fragment>
    )
}

export default ReviewList