import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import TitleField from "@/components/shared-components/text-fields/title-field";
import ReceiveFromSection from "@/components/dashboard/retail-dashboard/receive-form-section/receive-form-section";
import { useEffect, useState } from "react";
import { getCategories } from "packages/Commercetools/Categories/getCategories";



const ReceiveForm: NextPage = ():JSX.Element => {



    return (
        <Box
            margin='50px 0'
        >
            <Box
                width='450px'
                margin='auto'
            >
                <TitleField 
                    fontSize='56px'
                    color='#333333'
                >
                    Goods to receive
                </TitleField>
                <TitleField 
                    fontSize='16px'
                    color='#616161'
                >
                    Please let us know some details so we are able to match you against donated items.
                </TitleField>
            </Box>
            <Box>
                <ReceiveFromSection />
            </Box>
        </Box>
    )

}

export default ReceiveForm