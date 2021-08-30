import { Box, Image, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { Country } from 'types/country';

const countries: Country[] = [
    {
        country: "United Kingdom",
        icon: "../../icons/united-kingdom.svg"
    },
    {
        country: "Germany",
        icon: "../../icons/germany.svg"
    }
]

const DropDownSelector: NextPage = (): JSX.Element => {

    const MotionBox = motion(Box);
    const [ isListOpen, setIsListOpen ] = useState<boolean>(false);
    const [ selectedCountry, setSelectedCountry ] = useState<string>(countries[0].icon)

    const toggleSelect = (): void => {
        setIsListOpen(prevState => !prevState);
    };

    const selectedCountryItem = (name: string): void => {
        setSelectedCountry(name);
        setIsListOpen(false);
    };

    return(
        <Box 
            position='relative'
            fontFamily='Roboto Condensed'
            tabIndex={0} 
            onBlur={() => setIsListOpen(false)}
        >
            <Box 
                cursor='pointer'
                d='flex'
                alignItems='center'
                onClick={toggleSelect}
            >
                <Text
                    fontSize='18px'
                    marginRight='25px'
                >
                    Selecte a country
                </Text>
                <Image src={selectedCountry} alt='country' height='34px' width='34px'/>
                <Text
                    fontSize='24px'
                    marginLeft='5px'
                >
                    <FiChevronDown />
                </Text>
            </Box>
            {
                isListOpen && 
                <MotionBox
                    position='absolute'
                >                 
                    {
                        countries.map((country: Country, index: number) => {
                            return (
                                <Box
                                    d='flex'
                                    width='100%'
                                    cursor='pointer'
                                    marginBottom='5px'
                                    key={index}
                                    onClick={() => selectedCountryItem(country.icon)}
                                >
                                    <Image marginRight='10px' src={country.icon} alt='country' />
                                    <Text fontSize='18px'>{ country.country } </Text>
                                </Box>
                            )         
                        })
                    }
                </MotionBox>
            }
        </Box>
    )
}

export default DropDownSelector;