import React from 'react';

const GrocList = (props) =>  {
    if (props.item.currentStatus !== 'full') {
        // console.log('low');
        return(
            <li>
                <label htmlFor={props.item.id}>{props.item.currentItem}</label>
                <input
                    type="checkbox"
                    id={props.item.id}
                    name={props.item.currentItem}
                    onChange={() => props.checked(props.item.id)}
                />
            </li> 
        );
    }
    return '';
}

export default GrocList;