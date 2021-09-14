import { NextPage } from "next"
import { Slider, SliderFilledTrack, SliderTrack, SliderThumb, Box, Text } from '@chakra-ui/react'

interface Props {
    setSliderValue: (value: any) => void
}

const SliderInput: NextPage<Props> = ({ setSliderValue }):JSX.Element => {
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
                defaultValue={10}
                max={20} 
                step={1}
                onChangeEnd={(val) => setSliderValue(val)}
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
                20km
            </Text>
        </Box>
    )
}

export default SliderInput