import React from 'react';

const PantryItem = (props) => {
    if (props.item.currentStatus !== 'empty') {
        const status = props.item.currentStatus;
        return (
            <li className={status}>
                <p>{props.item.currentItem}
                    <span>{' - ' + props.item.currentDescription}</span>
                    <span>{' - ' + props.item.currentLocation}</span>
                </p>
                <div className="row">
                    <button onClick={() => props.status(props.item.id, props.item.currentStatus,)}>use</button>
                    <button onClick={() => props.delete(props.item.id)}>delete</button>
                </div>
            </li>
        )
    }
    return '';
}

export default PantryItem;