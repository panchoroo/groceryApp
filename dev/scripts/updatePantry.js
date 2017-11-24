import React from 'react';

class UpdatePantry extends React.Component {
    constructor() {
        super();
        this.state = {
            currentChecked: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('submit')
    //     // this.props.submitForm(this.state);
    //     // // reset the state after submitting    
    //     // /*  */
    //     // this.setState({
    //     //     currentItem: '',
    //     //     currentDescription: '',
    //     // })
    // }
    render() {
        return(
            ''
            // <button type="">Update pantry</button>
        )
    }
}

export default UpdatePantry;