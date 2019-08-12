import React from 'react';
import './DropDown.css';

export default ({element , onChange }) => {
    const { value , options } = element;
    return <select className = 'DropDown' required value={value.value} onChange = {onChange}>
            <option value="" disabled selected>Select Contact Type</option>
        {
            options.map(({value , displayValue}) => {
                return <option value={value}>
                    {displayValue}
                </option>
            })
        }
    </select>
}