import React , { Component } from 'react';

import ContactList from '../../components/ContactList';
import './Phonebook.css';
import AppHeader from '../../components/AppHeader';
import Modal from '../../hoc/Modal';
import AddContactForm from '../../components/AddContactForm';

class Phonebook extends Component {
    
    state = {
        contacts: [],
        showAddNewContact: false,
        editContact:false,
        updateContact: null
    }

    addContact = (contactData) => {
        this.setState({contacts : this.state.contacts.concat(contactData),showAddNewContact : false});
    }  

    updateContact = (contactData)  => {
        console.log( "contactData" , contactData , this.state.contacts);
        const index = this.state.contacts.findIndex(contact => contact.id === contactData.id);

        if(index >= 0) {
            let updatedContacts = [...this.state.contacts];///Object.assign([...this.state.contacts] , {index:contactData});
            updatedContacts[index] = contactData;
            console.log('After update contacts' , updatedContacts);
            this.setState({contacts:updatedContacts,editContact:false,updateContact:null});
        }
    }

    handleAddContact = () => {
        this.setState({showAddNewContact:true});
    }

    handleCancelAddContact = () => {
        this.setState({showAddNewContact : false , editContact : false ,updateContact : null});
    }

    handleEditContact = (contact) => {
        this.setState({editContact: true , updateContact :contact });
    }
    
    render() {
        return  <div className="Phonebook">
            <AppHeader addNewContact = {this.handleAddContact}/>
            <ContactList contacts = {this.state.contacts} onContactClick = {this.handleEditContact}/>
            {
                this.state.editContact && <Modal title="Add New Contact">
                    <AddContactForm submitForm = {this.updateContact} 
                        cancelForm = {this.handleCancelAddContact}
                        editing
                        contact= {this.state.updateContact}
                        />
                </Modal>
             
            }
            {
                   
               this.state.showAddNewContact && <Modal title="Add New Contact">
                   <AddContactForm submitForm = {this.addContact} cancelForm = {this.handleCancelAddContact}/>
               </Modal>
            }
        </div>
    }
}

export default Phonebook;