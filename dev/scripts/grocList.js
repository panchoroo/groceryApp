import React from 'react';

const GrocList = (props) =>  {
    if (props.item.currentStatus !== 'full') {
        const status = props.item.currentStatus;
        return(
            <li className={status}>
                <input
                    type="checkbox"
                    id={props.item.id}
                    name={props.item.currentItem}
                    onChange={() => props.checked(props.item.id)}
                />
                <label htmlFor={props.item.id}>{props.item.currentItem}</label>
            </li> 
        );
    }
    return '';
}

export default GrocList;