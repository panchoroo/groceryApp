import React from 'react';
// handleCheckbox(e) {
//         this.setState({
//             [e.target.id]: e.target.checked
//         })
//     }
// const makeGrocList = (props) =>  {
//     if (props.item.currentStatus !== 'full') {
//         // console.log('low');
//         return (
//             <li>
//                 <input
//                     type="checkbox"
//                     id="bought"
//                     name="bought"
//                 // onChange={this.handleCheckbox}
//                 />
//                 <p>{props.item.currentItem}</p>
//                 {/* <p>{props.item.currentDescription}</p>
//                     <p>{props.item.currentStatus}</p>
//                     <p>{props.item.currentLocation}</p>
//                     <p>{props.item.currentCategory}</p> */}
//                 <label htmlFor="bought"></label>
//                 {/* <p>{props.item.autoBuy}</p> */}
//             </li>
//         );
//     }
//     return '';
// }
class GrocList extends React.Component {
// const GrocList = (props) =>  {
    constructor() {
        super();
        this.state = {
            currentChecked: false,
            props
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.makeList = this.makeList.bind(this);
    }

    handleCheckbox(e) {
        this.setState({
            [e.target.id]: e.target.checked
        })
    }

    handleSubmit(e) {
        console.log('submit form and update pantry')
        // e.preventDefault();
        // console.log('submit')
        // this.props.submitForm(this.state);
        // // reset the state after submitting 
        // this.setState({
        //     currentItem: '',
        //     currentDescription: '',
        // })
    }
    makeList (props) {
        // if (props.item.currentStatus !== 'full') {
        //     // console.log('low');
        //     return (
        //         <li>
        //             <input
        //                 type="checkbox"
        //                 id="bought"
        //                 name="bought"
        //             // onChange={this.handleCheckbox}
        //             />
        //             <p>{props.item.currentItem}</p>
        //             {/* <p>{props.item.currentDescription}</p>
        //             <p>{props.item.currentStatus}</p>
        //             <p>{props.item.currentLocation}</p>
        //             <p>{props.item.currentCategory}</p> */}
        //             <label htmlFor="bought"></label>
        //             {/* <p>{props.item.autoBuy}</p> */}
        //         </li>
        //     );
        // }
        // return '';
    
    } 

    render() {
        if (this.props.item.currentStatus !== 'full') {
            return (
                <li>
                    <input
                        type="checkbox"
                        id="bought"
                        name="bought"
                    // onChange={this.handleCheckbox}
                    />
                    <p>{this.props.item.currentItem}</p>
                </li>
            );
        }
        return ('') 
    }
}

export default GrocList;