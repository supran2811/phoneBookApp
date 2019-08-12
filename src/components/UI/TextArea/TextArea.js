import React from 'react';

import './TextArea.css';

export default ({element:{ placeholder , value , ...rest}, handleChange , handleBlur, hasError} ) => {
    const classes = ['TextArea'];
    if(hasError) {
        classes.push('TextArea__error');
    }

    const classToApply = classes.join(' ');
    return <textarea rows="4" cols="50"  maxLength="200"
        className={classToApply}
        onBlur={handleBlur}
        onChange={handleChange} placeholder={placeholder} >
        {value}
    </textarea>
}