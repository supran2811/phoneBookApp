import React from 'react';

import './Button.css';

export default (props) => {
    const classes = ['Button'];

    const {
        large,
        primary,
        secondary,
        cls
    } = props;

    if(large) {
        classes.push('Button--large');
    }
    else if(primary) {
        classes.push('Button--primary');
    }
    else if(secondary) {
        classes.push('Button--secondary');
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