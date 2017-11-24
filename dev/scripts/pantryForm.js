import React from 'react';

class PantryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            currentDescription: '',
            currentCategory: '',
            currentStatus: 'full',
            currentLocation: 'shoppers',
            currentAutoBuy: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);

    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleCheckbox(e) {
        this.setState({
            [e.target.id]: e.target.checked
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        this.props.submitForm(this.state);
        // reset the state after submitting 
        this.setState({
            currentItem: '',
            currentDescription: '',
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input
                    id="currentItem"
                    placeholder="item"
                    type="text"
                    value={this.state.currentItem}
                    onChange={this.handleChange}
                    required="required"
                />
                <input
                    id="currentDescription"
                    placeholder="description"
                    type="text"
                    value={this.state.currentDescription}
                    onChange={this.handleChange}
                />

                <input
                    id="currentCategory"
                    placeholder="category"
                    type="text"
                    value={this.state.currentCategory}
                    onChange={this.handleChange}
                />

                {/* status */}
                <label htmlFor="full">full</label>
                <input
                    id="currentStatus"
                    type="radio"
                    value="full"
                    name="status"
                    onChange={this.handleChange}
                    defaultChecked
                />
                <label htmlFor="low">low</label>
                <input
                    id="currentStatus"
                    type="radio"
                    value="low"
                    name="status"
                    onChange={this.handleChange}
                />
                <label htmlFor="empty">empty</label>
                <input
                    id="currentStatus"
                    type="radio"
                    value="empty"
                    name="status"
                    onChange={this.handleChange}
                />
                {/* locations */}
                <label htmlFor="shoppers">shoppers</label>
                <input
                    type="radio"
                    id="currentLocation"
                    name="location"
                    value="shoppers"
                    onChange={this.handleChange}
                    defaultChecked
                />
                <label htmlFor="market">market</label>
                <input
                    type="radio"
                    id="currentLocation"
                    name="location"
                    value="market"
                    onChange={this.handleChange}
                />
                <label htmlFor="butcher">butcher</label>
                <input
                    type="radio"
                    id="currentLocation"
                    name="location"
                    value="butcher"
                    onChange={this.handleChange}
                />

                {/* autoBuy */}
                <label htmlFor="autoBuy">Auto Buy</label>
                <input 
                    type="checkbox" 
                    id="currentAutoBuy" 
                    name="autoBuy" 
                    onChange={this.handleCheckbox}
                    defaultChecked
                />
                
                <button type="submit">Add food item</button>
            </form>
        )
    }
}

export default PantryForm;