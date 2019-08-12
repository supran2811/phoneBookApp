import React from 'react';
import './DropDown.css';

export default ({element , onChange }) => {
    const { value  , options } = element;
    return <select className = 'DropDown' required value={value.value} onChange = {onChange}>
        {
            options.map(({value , displayValue , disabled }) => {
                return <option key={value} value={value} disabled={disabled}>
                    {displayValue}
                </option>
            })
        }
    </select>
}