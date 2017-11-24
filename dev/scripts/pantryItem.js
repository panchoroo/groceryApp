import React from 'react';

const PantryItem = (props) => {
    if (props.item.currentStatus !== 'empty') {
        const status = props.item.currentStatus;
        return (
            <li className={status}>
                <p>{props.item.currentItem}
                {/* <p> */}
                    <span>{' - ' + props.item.currentDescription}</span>
                    <span>{' - ' + props.item.currentLocation}</span>
                    <span>{' - ' + props.item.currentCategory}</span>
                </p>
                {/* <p className="status">{props.item.currentStatus}</p> */}
                {/* <button onClick={() => props.edit(props.item.id)}>edit</button> */}
                <button onClick={() => props.status(props.item.id, props.item.currentStatus,)}>use</button>
                <button onClick={() => props.delete(props.item.id)}>delete</button>
                {/* <p>{props.item.autoBuy}</p> */}
            </li>
        )
    }
    return '';
}

export default PantryItem;