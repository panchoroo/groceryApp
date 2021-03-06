import React from 'react';

const GrocList = (props) =>  {
    if (props.item.currentStatus !== 'full') {
        const status = props.item.currentStatus;
        const location = props.item.currentLocation;
        return(
            <li className={`${status} ${location} roundedCorners`}>
                <input
                    type="checkbox"
                    id={props.item.id}
                    name={props.item.currentItem}
                    onChange={() => props.checked(props.item.id)}
                />
                <label htmlFor={props.item.id}>
                    {props.item.currentItem} 
                    {props.item.currentDescription ? <span className="itemDesc">{`(${props.item.currentDescription})`}</span> :''}
                    <span className={`${location} itemLoc`}> 
                        {`${props.item.currentLocation}`}
                    </span>
                    
                    
                </label>
            </li> 
        );
    }
    return '';
}

export default GrocList;