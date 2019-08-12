import React , { Fragment } from 'react';
import './Contact.css';
const contact = ({contact}) => {
    const { firstName, lastName , phoneNumber , contactType} = contact;

    return <Fragment>
        <td className="Contact__item">{firstName}</td>
        <td className="Contact__item">{lastName}</td>
        <td className="Contact__item">{phoneNumber}</td>
        <td className="Contact__item">{contactType.displayValue}</td>
    </Fragment>
}

export default contact;