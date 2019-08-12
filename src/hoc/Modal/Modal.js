import React from 'react';

import './Modal.css';

export default ({children , title}) => {
    return <div className = 'Modal'>
        <div className = 'Modal__title'>{title}</div>
        {children}
    </div>
}