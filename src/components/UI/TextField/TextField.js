import React from 'react';

import './TextField.css';

export default ( {element , handleChange , handleBlur , hasError }  ) => {
    const classes = ['TextField'];
    if(hasError) {
        classes.push('TextField__error');
    }

    const classToApply = classes.join(' ');
    return <input className = {classToApply} 
        {...element}
        onChange={handleChange}
        onBlur= {handleBlur}/>
}

