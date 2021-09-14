import { ChangeEvent, FormEvent, useState } from "react";
import { Box } from "@chakra-ui/react"
import { NextPage } from "next"

import SelectField from "@/components/shared-components/input-fields/select-field";
import TitleField from "@/components/shared-components/text-fields/title-field";
import SubmitField from "@/components/shared-components/input-fields/submit-field";
import CheckBoxesList from "./checkboxes-list";
import CheckboxField from "@/components/shared-components/input-fields/checkbox-field";
import SliderInput from "@/components/shared-components/input-fields/slider-input";

const ReceiveFromSection: NextPage = (): JSX.Element => {

    const [ selectedType, setSelectedType ] = useState("");
    const [ selectedAgeRange, setSelectedAgeRange ] = useState("");
    const [ selectedBrand, setSelectedBrand ] = useState("");
    const [ checkedOption, setCheckedOption ] = useState({});
    const [ payCheckBox, setPayCheckBox ] = useState('');
    const [ collectCheckBox, setCollectCheckBox ] = useState('')
    const [ sliderValue, setSliderValue ] = useState('')

    const onHandleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setSelectedType(value);
    };

    const onHandleAgeRangeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setSelectedAgeRange(value);
    };

    const onHandleBrandChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setSelectedBrand(value);
    };

    const onPayHandleCheck = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, checked } = e.target;
        setPayCheckBox(name);
    }

    const onCollectHandleCheck = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, checked } = e.target;
        setCollectCheckBox(name);
    }

    const itemToSubmit = {
        type: selectedType,
        ageRange: selectedAgeRange,
        brand: selectedBrand,
        pay: payCheckBox,
        distance: sliderValue,
        checkedOption: Object.keys(checkedOption),
      };
    
    const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(itemToSubmit);
    };


    return(
       <Box
        width='450px'
        margin='50px auto'
       >
          <form onSubmit={onHandleSubmit}>
            <SelectField
                placeholder="Type of Item"
                name="type"
                onChange={onHandleTypeChange}
                options={[
                    { id: "Plastic toy", value: "Plastic toy" },
                    { id: "Electronic toy", value: "Electronic toy" },
                    { id: "Educational toy", value: "Educational toy" },
                    { id: "Construction toy", value: "Construction toy" },
                  ]}
            />
            <Box
                margin='30px 0'
            >
                <TitleField 
                    fontSize='22px'
                    color='#333333'
                    start
                >
                        I will...
                </TitleField>
                <CheckboxField 
                    name='... collect items'
                    label='... collect items'
                    checked={collectCheckBox}
                    onHandleCheck={onCollectHandleCheck}
                />
                <SliderInput setSliderValue={setSliderValue}/>
                <CheckboxField 
                    name='... pay delivery costs for certain items'
                    label='... pay delivery costs for certain items'
                    checked={payCheckBox}
                    onHandleCheck={onPayHandleCheck}
                />
            </Box>
            <TitleField 
                fontSize='22px'
                color='#333333'
                start
            >
                    Conditions:
            </TitleField>
            <CheckBoxesList 
                checkedOption={checkedOption} 
                setCheckedOption={setCheckedOption}
            />
            <SelectField
                placeholder="Please select age ranges"
                name="age"
                onChange={onHandleAgeRangeChange}
                options={[
                    { id: "0-1", value: "0-1" },
                    { id: "2-4", value: "2-4" },
                    { id: "5-7", value: "5-7" },
                    { id: "8+", value: "8+" },
                  ]}
            />
            <SelectField
                placeholder="Special interest in brands"
                name="brands"
                onChange={onHandleBrandChange}
                options={[
                    { id: "Lego", value: "Lego" },
                    { id: "Fisher-Price", value: "Fisher-Price" },
                    { id: "Nerf", value: "Nerf" },
                    { id: "Hot Wheels", value: "Hot Wheels" },
                  ]}
            />
            <SubmitField value='Save Settings' bgColor='#66B8EC' />
          </form>
       </Box>
    )
}

export default ReceiveFromSection

