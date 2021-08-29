import { NextPage } from 'next';
import { useState } from 'react';

import { Country } from 'types/country';

const countries: Country[] = [
    {
        "country": "United Kingdom",
        "icon": "EN"
    },
    {
        "country": "Germany",
        "icon": "DE"
    }
]

const DropDownSelector: NextPage = (): JSX.Element => {

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
        <div tabIndex={0} onBlur={() => setIsListOpen(false)}>
            <div onClick={toggleSelect}>
                <p>Selecte a country<span> { selectedCountry }</span></p>
            </div>
            {
                isListOpen && 
                <div>                 
                    {
                        countries.map((country: Country, index: number) => {
                            return (
                                <p 
                                    key={index}
                                    onClick={() => selectedCountryItem(country.icon)}
                                >
                                    { country.country } <span>{ country.icon }</span>
                                </p>
                            )         
                        })
                    }
                </div>
            }
        </div>
    )
}

export default DropDownSelector;