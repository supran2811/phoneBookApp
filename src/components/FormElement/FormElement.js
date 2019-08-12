import React from 'react';

import TextField from '../UI/TextField';
import TextArea from '../UI/TextArea';

import './FormElement.css';
import DropDown from '../UI/DropDown';

export default (props) => {

    const { id , data : { type , name, label ,validation , istouched , errorMsg} , handleChange } = props;
    let elementToRender;
    const handleBlur = e => {
        console.log('Inside handleBlur ',id , istouched , e.target.value , validation);
        const value = e.target.value;
        let error ;
        if(validation && validation.required) {
            const { validationFn , maxLength , minLength } = validation;
            if(validationFn) {
                if(!validationFn.call(null , value)){
                    error = 'Not a valid entry!'
                }
            }
            else if(minLength && value.length < minLength) {
                error = 'Value is less than the minimum lenght'
            }
            else if(maxLength && value.length > maxLength) {
                error = 'Value is greater than the maximum lenght'
            }
        }

        handleChange(id , value , error);
    }
    const handleTextChange = (e) => {
        console.log('Inside handleTextChange for '+id+':::',e.target.value);
      
        const value = e.target.value;
        handleChange(id , value );
        
    }

    const handleDropDownChange = e => {
        const value = e.target.value;
        const option = props.data.options.find(option => {
            return option.value === value
        })
        handleChange(id , option );
    }

    console.log('Inside textField ',id , errorMsg);
    if(type === 'text' || type === 'email' || type ==='number'){
        elementToRender =  <TextField id = {name} 
            element = {props.data} 
            handleChange = {handleTextChange} 
            handleBlur = {handleBlur}
            hasError  = {errorMsg !== ''}/>
    }
    else if(type === 'dropdown') {
        elementToRender = <DropDown element = {props.data} 
        onChange = {handleDropDownChange}/>
    }
    else if(type === 'text-area') {
        elementToRender = <TextArea id = {name} 
            element= {props.data}
            handleChange = {handleTextChange} 
            handleBlur = {handleBlur}
            hasError  = {errorMsg !== ''}/>
    }

    return <tr>
                <td width="20%">
                    <label htmlFor={name}>{label}</label>
                </td>
                <td width="80%">
                    {elementToRender}
                    <div className = "FormElement__error">
                        {errorMsg}
                    </div>
                </td>
           </tr>
}