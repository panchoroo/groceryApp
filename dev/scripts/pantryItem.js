import React from 'react';

const PantryItem = (props) => {
    if (props.item.currentStatus !== 'empty') {
        return (
            <li>
                <p>{props.item.currentItem}</p>
                <p>{props.item.currentDescription}</p>
                <p>{props.item.currentStatus}</p>
                <p>{props.item.currentLocation}</p>
                <p>{props.item.currentCategory}</p>
                <button onClick={() => props.edit(props.item.id)}>edit</button>
                <button onClick={() => props.status(props.item.id, props.item.currentStatus,)}>status</button>
                <button onClick={() => props.delete(props.item.id)}>delete</button>
                {/* <p>{props.item.autoBuy}</p> */}
            </li>
        )
    }
    return '';
}

export default PantryItem;