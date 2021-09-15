import { NextPage } from "next"
import { Slider, SliderFilledTrack, SliderTrack, SliderThumb, Box, Text } from '@chakra-ui/react'
import { useState } from "react";

interface Props {
    setSliderValue: (value: any) => void
    initValue: number
}

const SliderInput: NextPage<Props> = ({ setSliderValue, initValue }):JSX.Element => {

    const [value, setValue] = useState(initValue);

    return(
        <Box
            width='100%'
            fontFamily='Raleway'
            fontWeight='400'
            d='flex'
            alignItems='center'
            margin='10px 0 30px 0'
        >
            <Text
                fontSize='20px'
                color='#000000'
                marginRight='10px'
            >
                within:
            </Text>
            <Slider 
                min={0} 
                defaultValue={value}
                max={100} 
                step={1}
                onChangeEnd={(val) => { setValue(val); setSliderValue(val) }}
            >
                <SliderTrack bg="#EBEBEB">
                    <SliderFilledTrack bg="#66B8EC" />
                </SliderTrack>
                <SliderThumb bg='#66B8EC'/>
            </Slider>
            <Text
                fontSize='20px'
                color='#000000'
                marginLeft='10px'
            >
                {value}km
            </Text>
        </Box>
    )
}

export default SliderInput