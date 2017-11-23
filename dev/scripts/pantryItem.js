import React from 'react';

const PantryItem = (props) => {
    // console.log('props', props.item.item);
    return (
        <li>
            <p>{props.item.currentItem}</p>
            <p>{props.item.currentDescription}</p>
            <p>{props.item.currentStatus}</p>
            <p>{props.item.currentLocation}</p>
            <p>{props.item.currentCategory}</p>
            <button onClick={() => props.update(props.item.id)}>update</button>
            <button onClick={() => props.delete(props.item.id)}>delete</button>
            {/* <p>{props.item.autoBuy}</p> */}
        </li>
        
    )
}

export default PantryItem;