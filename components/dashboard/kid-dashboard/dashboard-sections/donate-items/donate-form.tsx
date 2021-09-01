import { NextPage } from "next"
import { ChangeEvent, FormEvent, useState } from "react";


//WIP
const DonateForm: NextPage = (): JSX.Element => { 

    const [ registerItem, setRegisterItem ] = useState({
        item: '',
        type: '',
        condition: ''
     });

     const { item, type, condition } = registerItem;

     const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setRegisterItem({...registerItem, [name]: value})
    };

    const onHandleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        console.log(registerItem);
        setRegisterItem({
            item: '',
            type: '',
            condition: ''
        });
    };

     
    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <div>
                    <input type='text' name='item' placeholder='Describe your Item'  
                    value={item} onChange={onHandleChange} />
                </div>
                <div>
                    <input type="text" name='type' placeholder='Type of item'
                    value={type} onChange={onHandleChange}/>
                </div>
                <div>
                    <input type="text" name='condition' placeholder='Condition'
                    value={condition} onChange={onHandleChange}/>
                </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default DonateForm