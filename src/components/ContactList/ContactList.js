import React from 'react';

import Contact from '../Contact';
import './ContactList.css';

const contactList = ({contacts , onContactClick}) => {
    const contactListData =  contacts && contacts.length > 0 ? <tbody>{contacts.map( contact => {
        return <tr className = 'ContactList__elemRow' key = {contact.id} onClick = {() => onContactClick(contact)}>
            <Contact contact={contact} />
        </tr>
    })}</tbody> : null;

    return <div className="ContactList">
            <table>
                <thead>
                    <tr >
                        <th align="left" className="ContactList__header">
                            First Name
                        </th>
                        <th align="left"  className="ContactList__header">
                            Last Name
                        </th>
                        <th align="left"  className="ContactList__header">
                            Phone Number
                        </th>
                        <th align="left"  className="ContactList__header">
                            Contact Type
                        </th>
                    </tr>
                </thead>
                    {contactListData}
               
        </table>
    </div>
}

export default contactList;