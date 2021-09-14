import CheckboxField from "@/components/shared-components/input-fields/checkbox-field";
import { Text, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { ChangeEvent, Fragment } from "react";

interface Props {
    checkedOption: any
    setCheckedOption: ( name: boolean )  => any
}

const checkboxOptions: { name: string }[] = [  
    { name: 'New' },
    { name: 'Used ( Good )' },
    { name: 'Used ( Worn )' },
    { name: 'Used ( Needs some TLC )' }
]


const CheckBoxesList: NextPage<Props> = ({ checkedOption, setCheckedOption }): JSX.Element => {

    const onHandleCheck = (e: ChangeEvent<HTMLInputElement>): void => {
        setCheckedOption({...checkedOption, [e.target.name] : e.target.checked });
    }

    return (
        <Box 
            marginBottom='30px'
            d='flex'
            flexDirection='column'
        >
            <Fragment>
                {
                    checkboxOptions.map((item: any, index: number) => {
                        return (
                            <CheckboxField 
                                key={ index }
                                name={item.name} 
                                label={item.name}
                                checked={checkedOption[item.name]} 
                                onHandleCheck={onHandleCheck}
                            />
                        )
                    })
                }        
            </Fragment>
        </Box>
    )
}

export default CheckBoxesList;