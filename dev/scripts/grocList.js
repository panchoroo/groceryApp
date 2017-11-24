import React from 'react';


const GrocList = (props) =>  {
    if (props.item.currentStatus !== 'full') {
        const status = props.item.currentStatus;
        const location = props.item.currentLocation;
        return(
            <li className={`${status} ${location}`}>
                <input
                    type="checkbox"
                    id={props.item.id}
                    name={props.item.currentItem}
                    onChange={() => props.checked(props.item.id)}
                />
                <label htmlFor={props.item.id}>{props.item.currentItem} - {props.item.currentDescription} - {props.item.currentLocation}
                </label>
            </li> 
        );
    }
    return '';
}

export default GrocList;