import React from 'react';
import './AppHeader.css';
import Button from '../UI/Button';

const appHeader = ({ addNewContact }) => {
    return <div className="AppHeader">
        <div className="AppHeader__appname"> Contact List </div>
        <Button onClick={addNewContact}> Add New Contact</Button>
    </div>
}

export default appHeader;