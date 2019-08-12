import React from 'react';

import TextField from '../UI/TextField';
import TextArea from '../UI/TextArea';

import './FormElement.css';
import DropDown from '../UI/DropDown';

export default (props) => {

    const { id , data : { type , name, label ,validation , errormsg, errortodisplay} , handleChange } = props;
    let elementToRender;
    const handleBlur = e => {
        const value = e.target.value;
        let error ;
        if(validation && validation.required) {
            const { validationFn , maxLength , minLength } = validation;
            if(validationFn) {
                if(!validationFn.call(null , value)){
                    error = errortodisplay;
                }
            }
            else if(minLength && value.length < minLength) {
                error = errortodisplay;
            }
            else if(maxLength && value.length > maxLength) {
                error =errortodisplay;
            }
        }
        handleChange(id , value , error);
    }
    const handleTextChange = (e) => {
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

    if(type === 'text' || type === 'email' || type ==='number'){
        elementToRender =  <TextField id = {name} 
            element = {props.data} 
            handleChange = {handleTextChange} 
            handleBlur = {handleBlur}
            hasError  = {errormsg !== ''}/>
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
            hasError  = {errormsg !== ''}/>
    }

    return <tr>
                <td width="20%">
                    <label htmlFor={name}>{label}</label>
                </td>
                <td width="80%">
                    {elementToRender}
                    <div className = "FormElement__error">
                        {errormsg}
                    </div>
                </td>
           </tr>
}