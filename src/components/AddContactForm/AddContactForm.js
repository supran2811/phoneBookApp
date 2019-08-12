import React , { useState } from 'react'

import utils from '../../utils';
import './AddContactForm.css';
import FormElement from '../FormElement/FormElement';
import Button from '../UI/Button';

export default ( { submitForm , cancelForm , contact , editing} ) => {
    const [ formData , setFormData  ] = useState({
        firstName : {
            type: 'text',
            name: 'firstName',
            label:'First Name*',
            placeholder: 'Enter first name',
            value: (contact && contact['firstName']) || '',
            errorMsg:'',
            validation: {
                minLength: 3,
                maxLength: 20,
                required:true
            },
            istouched: editing || false
        },
        lastName : {
            type: 'text',
            name: 'lastName',
            label:'Last Name',
            placeholder: 'Enter last name',
            value: (contact && contact['lastName']) || '',
            errorMsg:'',
            validation: {
                minLength: 3,
                maxLength: 20
            },
            istouched: editing || false
        },
        phoneNumber: {
            type: 'text',
            name: 'phoneNumber',
            label: 'Phone Number*',
            placeholder:'Enter Phone Number',
            value: (contact &&  contact['phoneNumber']) || '',
            errorMsg:'',
            validation: {
                validationFn:utils.validateTelephone,
                required:true
            },
            istouched: editing || false
        },
        contactType : {
            type:'dropdown',
            name: 'contactType',
            label: 'Contact Type*',
            value : (contact &&  contact['contactType']) || {value:'' , displayValue:''},
            errorMsg:'',
            options :[
                {
                    value : 'home',
                    displayValue:'Home'
                },
                {
                    value : 'mobile',
                    displayValue:'Mobile'
                },
                {
                    value : 'other',
                    displayValue:'Other'
                }
            ],
            validation: {
                required:true
            },
            istouched: editing || false
        },
        address:{
            type: 'text-area',
            label: 'Address*',
            name: 'address',
            placeholder: 'Enter address',
            value: (contact && contact['address'])|| '',
            errorMsg:'',
            validation: {
                minLength: 10,
                maxLength: 200,
                required:true
            },
            istouched: editing || false
        },  
        email: {
            type: 'email',
            label: 'Email*',
            name: 'email',
            value: (contact && contact['email']) || '',
            errorMsg:'',
            placeholder:'Enter Email Address',
            validation: {
                validationFn:utils.validateEmail,
                required:true
            },
            istouched: editing || false
        },
        notes:{
            type: 'text-area',
            label: 'Notes',
            name: 'notes',
            placeholder: 'Any additional notes',
            value: (contact && contact['notes']) || '',
            errorMsg:'',
            validation: {
                minLength: 10,
                maxLength: 200
            },
            istouched: editing || false
        },
    });

    const [ isFormValid , setFormIsValid ] = useState(editing || false);

    const handleChange = (key , newValue , error) => {
        console.log(key,newValue);
        let data = formData[key];
        data = { ...data , value : newValue , errorMsg: (error || '') , istouched:true};
        let updatedFormData = {...formData , [key] : data};
        let isValid = true;
        const formElems = Object.keys(updatedFormData);
        for(const formElemId of formElems){
            const formElem = updatedFormData[formElemId];
            const { validation , errorMsg , istouched} = formElem;
            if(validation && errorMsg !== '') {
                isValid = false;
                break;
            }
            else if(validation && validation.required && !istouched) {
                isValid = false;
                break;
            }
        };

        setFormData(updatedFormData);
        if(isValid !== isFormValid) {
            setFormIsValid(isValid);
        }
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        let data = editing ? {id : contact['id']} : {id : new Date().toISOString()};

        for(let formElem in formData) {
            data = {
                ...data , [formElem] : formData[formElem]['value']
            }
        }
        console.log('Updateing ',data);
        submitForm(data);
    }

    return <form className = "AddContactForm" onSubmit = {handleSubmitForm}>
             <table className="AddContactForm__form">
                <tbody>
            {
                Object.keys(formData).map(key => {
                    return <FormElement key = {key} 
                        id  = {key}
                        data={formData[key]} 
                        handleChange = {handleChange}/>
                })
            }
                <tr>
                    <td>
                        <Button cls="AddContactForm__btn" disabled = {!isFormValid} type='submit'>{ editing ? 'Update' : 'Add' }</Button>
                    </td>
                    <td>
                        <Button cls="AddContactForm__btn" type='button' onClick={cancelForm}>Cancel</Button>
                    </td>
                </tr>
                </tbody>
            </table>
         </form>
}
