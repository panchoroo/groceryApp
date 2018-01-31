import React from 'react';

class PantryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentItem: '',
            currentDescription: '',
            currentStatus: 'full',
            currentLocation: 'shoppers',
            currentAutoBuy: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit')
        this.props.submitForm(this.state);
        
        this.setState({
            currentItem: '',
            currentDescription: '',
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div className="textInputs">
                    <label htmlFor="currentItem" className="hidden">Enter a new food item</label>
                    <input
                        id="currentItem"
                        placeholder="Enter a new food item"
                        type="text"
                        value={this.state.currentItem}
                        onChange={this.handleChange}
                        required="required"
                    />
                    <label htmlFor="currentDescription" className="hidden">Optional description</label>
                    <input
                        id="currentDescription"
                        placeholder="Description (optional)"
                        type="text"
                        value={this.state.currentDescription}
                        onChange={this.handleChange}
                    />
                </div>

                {/* status */}
                <div className="radio">
                    <div className="radioInput">
                        <label htmlFor="full">full</label>
                        <input
                            id="currentStatus"
                            type="radio"
                            value="full"
                            name="status"
                            onChange={this.handleChange}
                            defaultChecked
                        />
                    </div>
                    <div className="radioInput">
                        <label htmlFor="low">low</label>
                        <input
                            id="currentStatus"
                            type="radio"
                            value="low"
                            name="status"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="radioInput">
                        <label htmlFor="empty">empty</label>
                        <input
                            id="currentStatus"
                            type="radio"
                            value="empty"
                            name="status"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                {/* locations */}
                <div className="radio">
                    <div className="radioInput">
                        <label htmlFor="shoppers">shoppers</label>
                        <input
                            type="radio"
                            id="currentLocation"
                            name="location"
                            value="shoppers"
                            onChange={this.handleChange}
                            defaultChecked
                        />
                    </div>
                    <div className="radioInput">
                        <label htmlFor="market">market</label>
                        <input
                            type="radio"
                            id="currentLocation"
                            name="location"
                            value="market"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="radioInput">
                        <label htmlFor="bulk">bulk store</label>
                        <input
                            type="radio"
                            id="currentLocation"
                            name="location"
                            value="bulk"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="radioInput">
                        <label htmlFor="butcher">butcher</label>
                        <input
                            type="radio"
                            id="currentLocation"
                            name="location"
                            value="butcher"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                
                <button type="submit">Add food item</button>
            </form>
        )
    }
}

export default PantryForm;