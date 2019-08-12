import React from 'react';

import './Button.css';

export default (props) => {
    const classes = ['Button'];

    const {
        large,
        cls
    } = props;

    if(large) {
        classes.push('Button--large');
    }
    else {
        classes.push('Button--default');
    }

    if(cls) {
        classes.push(cls);
    }

    const classToRender = classes.join(' ');
    
    return <button className = {classToRender} {...props} >
        {props.children}
    </button>
}